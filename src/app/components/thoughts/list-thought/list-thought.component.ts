import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

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

  filter:string = '';

  favorite:boolean = false;

  listFavorite:Thought [] = [];
  
  title:string = 'Meu Mural';

  constructor(
    private thoughtService: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.loadThoughts();
  }

  loadThoughts(){
    this.title = 'Meu Mural'; 
    this.favorite = false;
    this.currentPage = 1;
     this.thoughtService.getThought(this.currentPage, this.limitPage, this.filter, this.favorite)
    .subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    });
  }

  loadMoreThoughts(){
    this.thoughtService.getThought(++this.currentPage, this.limitPage, this.filter, this.favorite)
      .subscribe(listThoughts => {
      this.listThoughts.push(...listThoughts);
      if(!listThoughts.length){
        this.hasMoreThoughts = false;
      }
    })
  }

  searchThought(){
    this.currentPage = 1;
    this.hasMoreThoughts = true;
    this.thoughtService.getThought(this.currentPage, this.limitPage, this.filter, this.favorite)
    .subscribe(listThoughts => {
      this.listThoughts = listThoughts;
    })
  }

  getFavorite(){
    this.title = 'Meus Favoritos'; 
    this.hasMoreThoughts = true;
    this.currentPage = 1;
    this.favorite = true;
    this.thoughtService.getThought(this.currentPage, this.limitPage, this.filter, this.favorite)
    .subscribe(listFavoriteThought =>{
      this.listThoughts = listFavoriteThought;
      this.listFavorite = listFavoriteThought;
    })
  }

}
