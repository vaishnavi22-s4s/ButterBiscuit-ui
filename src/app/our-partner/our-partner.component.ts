import { Component, OnInit } from '@angular/core';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-our-partner',
  standalone: false,
  
  templateUrl: './our-partner.component.html',
  styleUrl: './our-partner.component.scss'
})
export class OurPartnerComponent implements OnInit{
  // ourPartner=[
  //   {
  //     imageUrl:"partner-img1.jpeg",
  //     width:"260px",
  //     height:"100px"
  //   },
  //   {
  //     imageUrl:"partner-img2.jpeg",
  //     width:"260px",
  //     height:"100px"
  //   },
  //   {
  //     imageUrl:"partner-img3.jpeg",
  //     width:"260px",
  //     height:"100px"
  //   },
  //   {
  //     imageUrl:"partner-img4.jpeg",
  //     width:"260px",
  //     height:"100px"
  //   },
  //   {
  //     imageUrl:"partner-img5.jpeg",
  //     width:"200px",
  //     height:"150px"
  //   },
  //   {
  //     imageUrl:"partner-img6.jpeg",
  //     width:"200px",
  //     height: "150px"
  //   }

  // ]

  ourPartner = [
    { imageUrl: 'partner-img1.jpeg', width: '100px', height: '100px' },
    { imageUrl: 'partner-img2.jpeg', width: '100px', height: '100px' },
    { imageUrl: 'partner-img3.jpeg', width: '100px', height: '100px' },
    { imageUrl: 'partner-img4.jpeg', width: '100px', height: '100px' },
    { imageUrl: 'partner-img5.jpeg', width: '100px', height: '100px' }
  ];

  visibleImages:any;
  currentIndex = 0;
  imagesPerSlide = 3;

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



