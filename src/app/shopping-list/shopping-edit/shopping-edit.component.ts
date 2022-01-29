import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddNewIngredient(ingredientName: HTMLInputElement,ingredientAmt: HTMLInputElement){
    console.log(ingredientAmt);
    let ingredient = new Ingredient(ingredientName.value,Number(ingredientAmt.value));
    this.ingredientAdded.emit(ingredient);
  }
}
