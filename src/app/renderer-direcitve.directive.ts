import { Directive,Renderer2,OnInit, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appRendererDirecitve]'
})
export class RendererDirecitveDirective implements OnInit {
  
  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
      
  }
  @HostListener('mouseenter') mouseOver(){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.renderer.setStyle(this.elRef.nativeElement,'color','white');
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.renderer.setStyle(this.elRef.nativeElement,'color','black');
  }
}
