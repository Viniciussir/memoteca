import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrl: './list-thought.component.css'
})
export class ListThoughtComponent {
  listThoughts:Thought [] = [];

  constructor(
    private thoughtService: ThoughtService
  ) { }

  ngOnInit(): void {
    this.thoughtService.getThought().subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    });
  }

}
