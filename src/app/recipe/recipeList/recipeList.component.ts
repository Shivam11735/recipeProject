import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
    selector: 'app-recipeList',
    templateUrl: './recipeList.component.html',
    styleUrls: ['./recipeList.component.html']
})

export class RecipeList implements OnInit{
    recipes: Recipe[] = [
        new Recipe('Demo1','This is Demo Recipe.','https://www.thespruceeats.com/thmb/PQtsZXCGAWhIlVZLE8aZnm-apvs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg'),
        new Recipe('Demo 2','This is a test description for Recipe.','https://www.thespruceeats.com/thmb/PQtsZXCGAWhIlVZLE8aZnm-apvs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-congee-recipes-4065244-hero-01-5cf81547c34d4520be10bb57c6cda902.jpg')
    ];


    constructor(){

    };

    ngOnInit(){

    };
}