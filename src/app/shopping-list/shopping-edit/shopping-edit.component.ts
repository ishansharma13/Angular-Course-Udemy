import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddNewIngredient(ingredientName: HTMLInputElement,ingredientAmt: HTMLInputElement){
    console.log(ingredientAmt);
    let ingredient = new Ingredient(ingredientName.value,Number(ingredientAmt.value));
    this.shoppingListService.addIngredient(ingredient);
  }
}
