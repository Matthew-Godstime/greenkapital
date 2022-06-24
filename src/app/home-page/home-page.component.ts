import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', '../../assets/flickicity.css']
})
export class HomePageComponent implements OnInit {


  Images: Array<any> = [
    {
      src: '../../assets/images/7.jpg',
      alt: 'Image 1',
    }, {
      src: '../../assets/images/1-1024x683-1.jpg',
      alt: 'Image 2'
    }
  ]

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: true,
    grabCursor: true,
  };

  //---------------------------------------
  imgCollection: Array<object> = [
    {
      image: '../../assets/images/R-64.webp',
      thumbImage: '../../assets/images/R-64.webp',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: '../../assets/images/inverter.webp',
      thumbImage: '../../assets/images/inverter.webp',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '../../assets/images/batteries.webp',
      thumbImage: '../../assets/images/batteries.webp',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '../../assets/images/61a2c8d2bf422988703daac42785e13d_medium.jpg',
      thumbImage: '../../assets/images/61a2c8d2bf422988703daac42785e13d_medium.jpg',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../../assets/images/R-2022-02-14T072435.056.webp',
      thumbImage: '../../assets/images/R-2022-02-14T072435.056.webp',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '../../assets/images/R-2022-03-04T003322.388.webp',
      thumbImage: '../../assets/images/R-2022-03-04T003322.388.webp',
      title: 'Image 6',
      alt: 'Image 6'
    },
    {
      image: '../../assets/images/20w-solar-light-1.webp',
      thumbImage: '../../assets/images/20w-solar-light-1.webp',
      title: 'Image 6',
      alt: 'Image 6'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
