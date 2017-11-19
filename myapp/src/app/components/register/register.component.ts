import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
    name :String;
    email:String;
    password:String;
    ph:Number;
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
  		name:this.name,
  		email:this.email,
  		password:this.password,
  		phonenumber:this.ph,
  	}
    
  	this.authService.addUser(user).subscribe(data => {
  	// console.log('HREREEEEEEEEEe');
  		if(data.success){
      this.flashMessage.show("You are successfully registered , can login !",{
        cssClass: 'alert-success',
        timeout:3000
      });
      this.router.navigate(['/login']);
  			console.log("User registered!");
  			console.log(data);
  		}
      else if(!data.succes){
        this.flashMessage.show("Email already exist!",{
        cssClass: 'alert-danger',
        timeout:4000
      });
      this.router.navigate(['/register']);
        console.log("User not registered!");
       // console.log(data.succes);
      }
  		else{
  		   console.log("User not registered !");
  		   this.router.navigate(['/register']);
  		}
  	});
  }

}
