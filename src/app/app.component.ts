import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema_de_alertas';


  constructor(private translate:TranslateService){
    this.translate.addLangs(['en','es']);

    const lang = this.translate.getBrowserLang();
    if(lang !== 'en' && lang !== 'es'){
      this.translate.setDefaultLang('en');
    } else{
      this.translate.use(lang);
    }
  }
}
