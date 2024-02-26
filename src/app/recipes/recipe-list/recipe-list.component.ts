import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test decription',
      'https://i.pinimg.com/originals/ea/cd/2c/eacd2c72f00daca43d91b6eb06f3e67b.jpg'
    ),
  ];
}
