import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css'
})
export class CreateThoughtComponent {
  thought = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    authorship: 'Dev',
    model: 'model1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert("Novo pensamento criado!");
    console.log(this.thought);
  }

  cancel() {
    alert("Ação cancelada!");
    console.log(this.thought);
  }
}
