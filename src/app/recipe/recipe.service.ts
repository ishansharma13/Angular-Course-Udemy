import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    recipeClicked = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1','Test Desc','https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',[{name:'Meat',amount: 1},{name: 'Cabbage',amount: 2}]),
        new Recipe('Test Recipe 2','Test Desc','https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',[{name:'Meat',amount: 1},{name: 'Cabbage',amount: 2}]),
        new Recipe('Test Recipe 3','Test Desc','https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',[{name:'Meat',amount: 1},{name: 'Cabbage',amount: 2}])
        
      ];

    constructor(private shoppingListService: ShoppingListService){}
    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }
    addToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredientsToShoppingList(ingredients);
    }
}