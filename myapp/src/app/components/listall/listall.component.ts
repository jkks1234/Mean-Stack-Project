import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {article} from './model';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {
	article:article[];
  constructor(private authService:AuthService,
  			  private router : Router,
          private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  
    this.authService.getData()
        .subscribe(article =>{
        
        	this.article=article;
        	console.log(article);

        },);
          
          
  };
  myfunc(article)
  {
    console.log(article);
  }
  	 

}
