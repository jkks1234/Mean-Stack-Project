import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {article1} from './model';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listone',
  templateUrl: './listone.component.html',
  styleUrls: ['./listone.component.css']
})
export class ListoneComponent implements OnInit {
article1:article1;
title: any;
sub :any;
  constructor(private authService:AuthService,private route:ActivatedRoute,
  			  private router : Router,
          private flashMessage:FlashMessagesService) { 
          }


  ngOnInit() {
    let id =this.route.snapshot.params['id'];
    console.log(id);
  	this.authService.getData1(id)
        .subscribe(article1 =>{
        
        	this.article1=article1;
        	console.log(article1);

        },);
  }

}
