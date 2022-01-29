import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<string>();
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeCardClick(name: string){
    console.log("from recipe-item: ",name);
    this.recipeClicked.emit(name);
  }
}
