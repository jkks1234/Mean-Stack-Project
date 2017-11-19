import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './services/auth.service'
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpModule} from '@angular/http'
import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard'
import {FlashMessagesModule} from 'angular2-flash-messages';
import { LoginComponent } from './components/login/login.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { ListallComponent } from './components/listall/listall.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FooterComponent } from './components/footer/footer.component';
import { ListoneComponent } from './components/listone/listone.component';
import { MyarticlesComponent } from './components/myarticles/myarticles.component';

const appRoutes: Routes=[
	{path:'register',component:RegisterComponent},
  {path:'login'   ,component:LoginComponent} ,
  {path:'addarticle',component:AddarticleComponent , canActivate:[AuthGuard]},
  {path:'listone/:id' ,component:ListoneComponent},
  {path:'listall',component:ListallComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'myarticles',component:MyarticlesComponent  , canActivate:[AuthGuard]}
  
]



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddarticleComponent,
    ListallComponent,
    NavbarComponent,
    FooterComponent,
    ListoneComponent,
    MyarticlesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
