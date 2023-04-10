import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalHeader } from './globalHeader/globalHeader.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetail } from './recipe/recipeDetail/recipeDetail.component';
import { RecipeItem } from './recipe/recipeItem/recipeItem.component';
import { RecipeList } from './recipe/recipeList/recipeList.component';
import { ShoppingList } from './shopping/shoppingList/shoppingList.component';
import { ShoppingListEdit } from './shopping/shoppingListEdit/shoppingListEdit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingConponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeader,
    RecipeDetail,
    RecipeItem,
    RecipeList,
    ShoppingList,
    ShoppingListEdit,
    RecipeComponent,
    ShoppingConponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
