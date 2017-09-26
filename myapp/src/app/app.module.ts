import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './services/auth.service'
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpModule} from '@angular/http'
import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'

const appRoutes: Routes=[
	{path:'register',component:RegisterComponent}


]



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
