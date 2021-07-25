import { Directive, ElementRef} from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HostBinding } from '@angular/core';
import { OnInit } from '@angular/core';

import { Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentTemplateStatus } from '../componentTemplateStatus';
import { ComponentSizes } from './componentTemplatSize';
import { convertToBoolProperty } from './helpers';

@Directive({
  selector: 'button[popo]'
})
export class ButtonDirectiveDirective implements OnInit {

  @Input() status: ComponentTemplateStatus = 'info';
  @Input() size: ComponentSizes = 'md';  
  
  private _isLoading = false;
  private _outline = false;

  static ngAcceptInputType_outline: any;  @Input()
  
  get outline(): boolean {
    return this._outline;
  }
  set outline(value: boolean) {
    this._outline = convertToBoolProperty(value);
  }  

  @HostBinding('class.spinner')
  @Input()
  get isLoading(): boolean {
    return this._isLoading;
  }
  set isLoading(value: boolean) {
    this._isLoading = convertToBoolProperty(value);
  }

  private _fullWidth = false;

  static ngAcceptInputType_fullWidth: any; 
  
  @HostBinding('class.w-100')
  @Input()
  get fullWidth(): boolean {
    return this._fullWidth;
  }
  set fullWidth(value: boolean) {
    this._fullWidth = convertToBoolProperty(value);
  }  
  
  private _square = false;

  static ngAcceptInputType_square: any; 
  
  @HostBinding('class.square')
  @Input()
  get square(): boolean {
    return this._square;
  }
  set square(value: boolean) {
    this._square = convertToBoolProperty(value);
  }
  
  @HostBinding('class.md')
  get md() {
    return this.size === 'md';
  }

  @HostBinding('class.sm')
  get sm() {
    return this.size === 'sm';
  }
  
  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  public ngOnInit(): void {
    const prefix = this.outline ? 'dsw-button-outline-' : 'dsw-button-';
    this.elementRef.nativeElement.classList.add(`dsw-button`);
    this.elementRef.nativeElement.classList.add(`${prefix}${this.status}`);
  }
  
  public ngOnChanges(changes: SimpleChanges) {
    if (changes.status) {
      const prefix = this.outline ? 'dsw-button-outline-' : 'dsw-button-';
      this.elementRef.nativeElement.classList.add(`dsw-button`);
      this.elementRef.nativeElement.classList.remove(`${prefix}${changes.status.previousValue}`);
      this.elementRef.nativeElement.classList.add(`${prefix}${changes.status.currentValue}`);
    }

    if (changes.isLoading) {
      const isLoading = changes.isLoading.currentValue;
      isLoading ? this.disableElement() : this.enableElement();
    }
  }
  
  private disableElement(): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', '');
  }
  
  private enableElement(): void {
    this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
  }
    
  
  // @Input() set myIf(shouldAddToDOM: boolean) {
  //   console.log('coucou',shouldAddToDOM)
  //   if (shouldAddToDOM) {

  //     // If the value is true, add template to the DOM

  //     this.container.createEmbeddedView(this.template);

  //   } else {

  //    // Otherwise delete template from the DOM

  //     this.container.clear();

  //   }

  // }

}