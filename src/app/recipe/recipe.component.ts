import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1','Test Desc','https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
    new Recipe('Test Recipe 2','Test Desc','https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg'),
    new Recipe('Test Recipe 3','Test Desc','https://image.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg')
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeItemClicked(eventData: Recipe){
    // console.log(eventData);
    this.recipe = eventData;
    
    // console.log(this.recipe);
  }
}
