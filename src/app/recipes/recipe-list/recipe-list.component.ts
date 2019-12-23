import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Testing recipes',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/05/sausage-kale-gnocchi-one-pot.jpg'
    ),
    new Recipe(
      'Test recipe',
      'Testing recipes',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/05/sausage-kale-gnocchi-one-pot.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
