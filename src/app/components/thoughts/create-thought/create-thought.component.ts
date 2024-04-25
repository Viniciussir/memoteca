import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css'
})
export class CreateThoughtComponent {
  thought:Thought = {
    content: '',
    authorship: '',
    model: 'model1'
  }

  constructor(
    private thoughtService: ThoughtService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  createThought() {
    this.thoughtService.creactThought(this.thought).subscribe(() => {
      this.router.navigate(['/list-thought']);
    })
  }

  cancel() {
    this.router.navigate(['/list-thought']);
  }

}
