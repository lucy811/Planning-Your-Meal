import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'gray');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
  }

  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'gray');
  }

}

