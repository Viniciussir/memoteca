import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrl: './delete-thought.component.css'
})
export class DeleteThoughtComponent {

  thought:Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
    favorite: false
  }

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.thoughtService.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    })
  }

  deleteThought() {
    if(this.thought.id) {
      this.thoughtService.deleteThoughtById(this.thought.id).subscribe(() => {
        this.router.navigate(['/list-thought']);
      })
    }
  }

  cancel() {
    this.router.navigate(['/list-thought']);
  }
}
