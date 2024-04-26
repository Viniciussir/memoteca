import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css'
})
export class EditThoughtComponent {

  form!:FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.thoughtService.getById(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: [thought.id],
        content: [thought.content, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        authorship: [thought.authorship, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        model: [thought.model]
      });
    })
  }

  edit() {
    this.thoughtService.editThought(this.form.value).subscribe(() => {
      this.router.navigate(['/list-thought']);
    })
  }

  cancel() {
    this.router.navigate(['/list-thought']);
  }

  enableButton(): string{
    if(this.form.valid){
      return 'button'
    } else {
      return 'button__disabled'
    }
  }

}
