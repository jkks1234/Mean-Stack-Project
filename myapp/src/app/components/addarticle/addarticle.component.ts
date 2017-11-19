import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
	title:string;
	body:string;
 constructor(private authService:AuthService,
  			  private router : Router,
          private flashMessage:FlashMessagesService) { }


  ngOnInit() {
  }
  onSubmit(){
  const article={	
  		title:this.title,
  		body:this.body,
  	}
  	this.authService.addarticle(article).subscribe(data => {
  	 
  		if(data){
  			console.log("article added!");
  			console.log(data);
        this.router.navigate(['/listall']);
  		}
  		else{
  		   console.log("sorry");
         this.router.navigate(['/addarticle']);
  		}
  	});

}
}
