import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('I1',4),
    new Ingredient('I2',7),
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(eventData: Ingredient){
    this.ingredients.push(eventData);
  }
}
