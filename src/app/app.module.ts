import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalHeader } from './globalHeader/globalHeader.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetail } from './recipeDetail/recipeDetail.component';
import { RecipeItem } from './recipeItem/recipeItem.component';
import { RecipeList } from './recipeList/recipeList.component';
import { ShoppingList } from './shoppingList/shoppingList.component';
import { ShoppingListEdit } from './shoppingListEdit/shoppingListEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeader,
    RecipeDetail,
    RecipeItem,
    RecipeList,
    ShoppingList,
    ShoppingListEdit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
