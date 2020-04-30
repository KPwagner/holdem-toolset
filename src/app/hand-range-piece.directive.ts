import { Directive, HostListener } from '@angular/core';

@Directive({selector: '[handRangePieceDirective]'})
export class HandRangePiece {
  @HostListener('mouseenter')
  onMouseEnter() {
    
  }
}