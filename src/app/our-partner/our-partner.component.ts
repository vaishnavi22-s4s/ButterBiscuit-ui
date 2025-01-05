import { Component, OnInit } from '@angular/core';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-our-partner',
  standalone: false,
  
  templateUrl: './our-partner.component.html',
  styleUrl: './our-partner.component.scss'
})
export class OurPartnerComponent implements OnInit{


  ourPartner = [
    { imageUrl: 'partner-img1.jpeg'  },
    { imageUrl: 'partner-img2.jpeg' },
    { imageUrl: 'partner-img3.jpeg' },
    { imageUrl: 'partner-img4.jpeg' },
    { imageUrl: 'partner-img5.jpeg' },
    { imageUrl: 'partner-img6.jpeg' },
    { imageUrl: 'partner-img7.png' },
    { imageUrl: 'partner-img8.png' }
  ];

  visibleImages:any;
  currentIndex = 0;
  imagesPerSlide = 1;

  ngOnInit(): void {
    this.updateVisibleImages();
  }

  updateVisibleImages(): void {
    const start = this.currentIndex;
    const end = this.currentIndex + this.imagesPerSlide;
    this.visibleImages = this.ourPartner.slice(start, end);
  }

  nextSlide(): void {
    this.currentIndex += this.imagesPerSlide;
    if (this.currentIndex >= this.ourPartner.length) {
      this.currentIndex = 0; // Loop back to the start
    }
    this.updateVisibleImages();
  }

  prevSlide(): void {
    this.currentIndex -= this.imagesPerSlide;
    if (this.currentIndex < 0) {
      this.currentIndex = this.ourPartner.length - this.imagesPerSlide; // Loop to the end
    }
    this.updateVisibleImages();
  }





}



