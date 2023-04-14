import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shoppingList',
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css']
})

export class ShoppingList implements OnInit{


    ingredients: Ingredient[] =  [
        new Ingredient('Apples', 12),
        new Ingredient('Mango', 6)
    ];


    constructor(){

    };


    ngOnInit(): void {
        
    };

}