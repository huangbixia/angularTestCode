import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgBookIf]'
})
export class NgBookIfDirective {
  @Input() set appNgBookIf(condition) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.template);
    } else {
      this.viewContainerRef.clear();
    }
  }
  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {

   }

}
