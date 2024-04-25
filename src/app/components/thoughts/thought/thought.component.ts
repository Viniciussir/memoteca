import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css'
})
export class ThoughtComponent {
  @Input() thought = {
    content: 'I love Angular',
    authorship: 'Nay',
    model: 'model3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if(this.thought.content.length >= 256) {
      return 'thought-g'
    }
    return 'thought-p'
  }
}
