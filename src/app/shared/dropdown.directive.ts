import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') mouseOver(){
    this.renderer.addClass(this.elRef.nativeElement,'open');
  }
  @HostListener('mouseout') mouseOut(){
    this.renderer.removeClass(this.elRef.nativeElement,'open');
  }
}
