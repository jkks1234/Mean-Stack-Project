import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
    name :String;
    email:String;
    address:String;
    ph:Number;
    city:String;
  constructor(private authService:AuthService,
  			  private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
  	const user ={
  		name:this.name,
  		email:this.email,
  		address:this.address,
  		phonenumber:this.ph,
  		city:this.city
  	}

  	this.authService.addUser(user).subscribe(data => {
  	 
  		if(data){
  			console.log("User registered!");
  			console.log(data);
  		}
  		else{
  		   console.log("User not registered !");
  		   this.router.navigate(['/register']);
  		}
  	});
  }

}
