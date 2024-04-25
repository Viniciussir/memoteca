import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrl: './list-thought.component.css'
})
export class ListThoughtComponent {
  listThoughts = [
    {
      content: 'Passo informações para o componente filho',
      authorship: 'Componente pai',
      model: 'modelo3'
    },
    {
      content: 'Minha propriedade é decorada com @Input()',
      authorship: 'Componente filho',
      model: 'modelo2'
    },
    {
      content: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim. ',
      authorship: '',
      model: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}