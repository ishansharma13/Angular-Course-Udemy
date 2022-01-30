import { Directive,Renderer2,OnInit, ElementRef,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRendererDirecitve]'
})
export class RendererDirecitveDirective implements OnInit {
  @Input() defaultBackground: string = 'yellow';
  @Input() defaultTextColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string ;
  @HostBinding('style.color') color: string ;
  constructor(private elRef: ElementRef,private renderer: Renderer2) { 

  }

  ngOnInit(): void {
      this.backgroundColor = this.defaultBackground;
      this.color = this.defaultTextColor;
  }
  @HostListener('mouseenter') mouseOver(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','white');
    this.backgroundColor = 'blue';
    this.color = 'white';
  }
  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','black');
    this.backgroundColor = this.defaultBackground;
    this.color = this.defaultTextColor;
  }
}
