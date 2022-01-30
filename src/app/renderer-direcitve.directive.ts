import { Directive,Renderer2,OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendererDirecitve]'
})
export class RendererDirecitveDirective implements OnInit {

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
      this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
      this.renderer.setStyle(this.elRef.nativeElement,'color','white');
  }
}
