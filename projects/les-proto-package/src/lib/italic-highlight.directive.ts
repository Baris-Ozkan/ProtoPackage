import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[libItalicHighlight]'
})
export class ItalicHighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.fontStyle = 'italic';
  }

}
