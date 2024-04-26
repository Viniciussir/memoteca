import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrl: './load-more-button.component.css'
})
export class LoadMoreButtonComponent {
  @Input() hasMoreThoughts: boolean = false;
}
