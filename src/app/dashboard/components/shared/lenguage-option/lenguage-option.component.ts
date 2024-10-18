import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lenguage-option',
  templateUrl: './lenguage-option.component.html',
  styleUrl: './lenguage-option.component.css'
})
export class LenguageOptionComponent {

  private elementRef = inject(ElementRef);
  private translateService = inject(TranslateService);

  lenguageBottom:boolean = false;

  translateText(lang:string){
    this.translateService.use(lang);
    this.lenguageBottom = false;
  }

  activeOpcion(){
    this.lenguageBottom = !this.lenguageBottom;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.lenguageBottom = false;
    }
  }

}
