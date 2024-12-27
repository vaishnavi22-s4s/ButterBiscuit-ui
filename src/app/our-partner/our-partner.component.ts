import { Component } from '@angular/core';
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-our-partner',
  standalone: false,
  
  templateUrl: './our-partner.component.html',
  styleUrl: './our-partner.component.scss'
})
export class OurPartnerComponent {
  ourPartner=[
    {
      imageUrl:"partner-img1.jpeg",
      width:"260px",
      height:"100px"
    },
    {
      imageUrl:"partner-img2.jpeg",
      width:"260px",
      height:"100px"
    },
    {
      imageUrl:"partner-img3.jpeg",
      width:"260px",
      height:"100px"
    },
    {
      imageUrl:"partner-img4.jpeg",
      width:"260px",
      height:"100px"
    },
    {
      imageUrl:"partner-img5.jpeg",
      width:"200px",
      height:"150px"
    },
    {
      imageUrl:"partner-img6.jpeg",
      width:"200px",
      height: "150px"
    }

  ]

}


