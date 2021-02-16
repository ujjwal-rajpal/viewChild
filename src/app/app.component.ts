import { AfterViewInit, Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  // create a variable of type ElementRef
  @ViewChild('nameRef')nameTypeRef: ElementRef;

  // access if on template render
  // focus on field when page is rendered
ngAfterViewInit(){
  this.nameTypeRef.nativeElement.focus();
}
}