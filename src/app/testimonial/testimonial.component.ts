import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

@Component({
  selector: 'app-testimonial',
  standalone: false,
  
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',

})
export class TestimonialComponent implements OnInit {



  ngOnInit(): void {
    new Splide('#splide', {
      type: 'loop',      // Enables looping of slides
      perPage: 3,        // Show 3 slides per row
      perMove: 1,        // Move 1 slide at a time
      autoplay: true,    // Enable auto-play
      interval: 3000,    // 3 seconds between slides
      pauseOnHover: true, // Pause autoplay on hover
      pagination: true,  // Enable pagination indicators
      arrows: true,      // Enable navigation arrows
      gap: '4rem',    
      focus: 'center',   // Space between slides
     
    }).mount();

    
  }
 


  

}

