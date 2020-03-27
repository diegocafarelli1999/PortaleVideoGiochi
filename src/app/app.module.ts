import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { GamesListComponent } from './component/games-list/games-list.component';
import { GameDetailComponent } from './component/game-detail/game-detail.component';
import { EditGameComponent } from './component/edit-game/edit-game.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LoginGuardService } from './service/login-guard.service';
import { from } from 'rxjs';
const appRoutes: Routes = [

  { path: 'home', component: HomeComponent, canActivate: [LoginGuardService] },

  { path: 'gameList', component: GamesListComponent, canActivate: [LoginGuardService] },

  { path: 'gameDetail', component: GameDetailComponent, canActivate: [LoginGuardService] },

  { path: 'editGame', component: EditGameComponent, canActivate: [LoginGuardService] },

  { path: 'login', component: LoginComponent },





];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GamesListComponent,
    GameDetailComponent,
    EditGameComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],

  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
