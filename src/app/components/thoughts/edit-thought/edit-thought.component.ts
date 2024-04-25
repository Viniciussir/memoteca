import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from '../thought';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css'
})
export class EditThoughtComponent {

  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: ''
  }

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.thoughtService.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    })
  }

  edit() {
    this.thoughtService.editThought(this.thought).subscribe(() => {
      this.router.navigate(['/list-thought']);
    })
  }

  cancel() {
    this.router.navigate(['/list-thought']);
  }

}
