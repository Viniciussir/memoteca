import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css'
})
export class CreateThoughtComponent {
  form!:FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content:['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      authorship: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      model: ['modelo3']
    })
  }

  createThought() {
    console.log(this.form.get('authorship')?.errors);
    if(this.form.valid){
      this.thoughtService.creactThought(this.form.value).subscribe(() => {
        this.router.navigate(['/list-thought']);
      })
    }
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
