import { Component, ElementRef, HostListener, inject } from '@angular/core';

@Component({
  selector: 'accion-option',
  templateUrl: './accion-option.component.html',
  styleUrl: './accion-option.component.css'
})
export class AccionOptionComponent {

  private elementRef = inject(ElementRef);

  accionBottom:boolean = false;


  activeOpcion(){
    this.accionBottom = !this.accionBottom;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.accionBottom = false;
    }
  }
}
