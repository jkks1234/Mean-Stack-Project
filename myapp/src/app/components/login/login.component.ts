import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     email:String;
    password:String;
  constructor(private authService:AuthService,
  			  private router : Router,
          private flashMessage:FlashMessagesService) { }

  ngOnInit() {
          if(this.authService.loggedIn()){
             this.router.navigate(['/listall']);
        }
  }
  onSubmit(){
  	const user ={
  		
  		email:this.email,
  		password:this.password,
  	}
  	this.authService.authenticateUser(user).subscribe(data => {
  	 console.log('data');
  		if(data.success){
            // console.log("Login Successfull !");
            this.authService.storeUserData(data.token , data.user);
            this.flashMessage.show('You are now logged in !', {cssClass:'alert-success'  ,timeout:5000});
            this.router.navigate(['/listall']);
            }
  		else{
        this.authService.storeUserData(data.token , data.user);
            this.flashMessage.show('Check Email/Password !', {cssClass:'alert-danger'  ,timeout:4000});
            this.router.navigate(['/login']);
  		   console.log("User not registered !");
  		 
  		}
  	});
  }
}
