import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, CommonModule,PolicyComponent, NavComponent, FooterComponent, SliderComponent,CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  , 
})
export class AppComponent {
  

  title = 'ecommerce';
  url:string = "images/img-4.jpg"
  changeImg(event:any){
  this.url =event.target.src
   }
   
   url2:string = "images/img-5.jpg"
    changeImg2(event:any){
   this.url2 =event.target.src
  }
    
  url3:string = "images/img-9.jpg"
  changeImg3(event:any){
   this.url3 =event.target.src
    }

    url4:string = "images/img-13.jpg"
    changeImg4(event:any){
     this.url4 =event.target.src
      }
      customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        navSpeed: 700,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 2 }
        },
        nav: true
      };
      
    }
 
  