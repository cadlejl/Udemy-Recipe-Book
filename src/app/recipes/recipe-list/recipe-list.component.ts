import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe", 
      "This is just a test recipe", "https://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg"
    ),
    new Recipe(
      "Test Recipe", 
      "This is just a test recipe", 
      "https://tse1.mm.bing.net/th?id=OIP.FXwgyF2NswRfOWwXHvYdJQHaE7&pid=15.1&P=0&w=241&h=162"
    )
  ];

  constructor() { }
  ngOnInit() {}

}
