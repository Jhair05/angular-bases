import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiterman', 'Ironman', 'Hulk', 'Thor', 'Black Widow'];
  public deletedHereo?: string;

  removeLastHereo(): void {
    this.deletedHereo = this.heroNames.pop();
    console.log(this.deletedHereo);
  }

}
