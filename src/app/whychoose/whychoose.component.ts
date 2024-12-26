import { Component } from '@angular/core';

@Component({
  selector: 'app-whychoose',
  standalone: false,
  
  templateUrl: './whychoose.component.html',
  styleUrl: './whychoose.component.scss'
})
export class WhychooseComponent {
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
  isHovered1 = false;
  isHovered2 = false;
  isHovered3 = false;
  isHovered4 = false;
  isHovered5 = false;
  isHovered6 = false;
}


