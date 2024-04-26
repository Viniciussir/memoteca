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

  currentPage: number = 1;
  limitPage:number = 6;

  hasMoreThoughts:boolean = true;

  constructor(
    private thoughtService: ThoughtService
  ) { }

  ngOnInit(): void {
    this.thoughtService.getThought(this.currentPage, this.limitPage).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    });
  }

  loadMoreThoughts(){
    this.thoughtService.getThought(++this.currentPage, this.limitPage)
      .subscribe(listThoughts => {
      this.listThoughts.push(...listThoughts);
      if(!listThoughts.length){
        this.hasMoreThoughts = false;
      }
    })
  }

}
