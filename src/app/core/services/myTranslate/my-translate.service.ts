import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import{TranslateService} from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

   private readonly _renderer2=inject(RendererFactory2).createRenderer(null,null)
  constructor(private translateService:TranslateService,
    @Inject(PLATFORM_ID) private plat_id:object ) {

    if (isPlatformBrowser(plat_id)) {
      
     this.translateService.setDefaultLang('en')
     const savedLang = localStorage.getItem('lang')
     if (savedLang) {
     this.translateService.use(savedLang!)
 
     }
     this.changeDirection();

    }

       }

   changeDirection():void{
    if(localStorage.getItem('lang') ==='en'){
      // document.documentElement.dir = 'ltr';
      this._renderer2.setAttribute(document.documentElement, 'dir' ,'ltr' )
      this._renderer2.setAttribute(document.documentElement, 'lang' ,'en' )

    }else if( localStorage.getItem('lang') === 'ar'){
      this._renderer2.setAttribute(document.documentElement, 'dir' ,'rtl' )
      this._renderer2.setAttribute(document.documentElement, 'lang' ,'ar' )


    }
   }
}
