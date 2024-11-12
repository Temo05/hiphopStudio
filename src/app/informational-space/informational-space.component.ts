import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-informational-space',
  templateUrl: './informational-space.component.html',
  styleUrls: ['./informational-space.component.css'],
})
export class InformationalSpaceComponent {
  @HostListener('window:scroll', ['$event'])
  onScrool($event: any) {
    if (screen.width > 1400) {
      if (window.scrollY > 130) {
        document.getElementsByClassName('boxesSpace')[0].classList.add('intro');
      }
    } else {
      const arrOfDivs = document.getElementsByClassName('informationalBoxes');
      if (window.scrollY > 130) {
        arrOfDivs[0].classList.add('intro');
        arrOfDivs[1].classList.add('intro');
      }
      if (window.scrollY > 270) {
        arrOfDivs[2].classList.add('intro');
        arrOfDivs[3].classList.add('intro');
      }
    }
  }

  changePage(event: any) {
    window.location.href = '/' + event.target.name;
  }
}
