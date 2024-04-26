import { ThoughtService } from './../thought.service';
import { Component, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css'
})
export class ThoughtComponent {
  @Input() thought:Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: '',
    favorite: false
  }

  constructor(
    private thoughtService:ThoughtService
  ) { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if(this.thought.content.length >= 256) {
      return 'thought-g'
    }
    return 'thought-p'
  }

  changeIconFavorite(): string{
    if(this.thought.favorite == false){
      return 'inativo'
    } else {
      return 'ativo'
    }
  }

  updateFavorites(){
    this.thoughtService.changeFavorite(this.thought).subscribe();
  }
  
}
