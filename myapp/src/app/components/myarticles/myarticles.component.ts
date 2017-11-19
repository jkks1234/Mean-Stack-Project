import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {article} from './model';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myarticles',
  templateUrl: './myarticles.component.html',
  styleUrls: ['./myarticles.component.css']
})
export class MyarticlesComponent implements OnInit {

  article:article[];
  response :any;
  constructor(private authService:AuthService,
  			  private router : Router,
          private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  
    this.authService.getData2()
        .subscribe(article =>{
        
        	this.article=article;
        	console.log(article);

        },);
     };
     clicked(t)
     {
      console.log(t);
      this.authService.delete(t)
      .subscribe(response =>{
        
          this.response=response;
          console.log('hum yaha hai');
         window.location.reload();
        },);

     }
}
