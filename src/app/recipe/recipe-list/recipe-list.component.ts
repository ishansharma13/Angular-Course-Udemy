import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() relayFired = new EventEmitter<string>();
  @Input() recipes: Recipe[];
  constructor() { }

  ngOnInit(): void {
  }
  onRelayToRecipe(eventData: string){
    console.log("from recipe-list: ",eventData);
    this.relayFired.emit(eventData);
  }
}
