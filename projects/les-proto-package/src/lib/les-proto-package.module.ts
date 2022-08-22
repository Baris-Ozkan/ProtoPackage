import { NgModule } from '@angular/core';
import { LesProtoPackageComponent } from './les-proto-package.component';
import { NoSAllUPipe } from './no-sall-u.pipe';
import { ItalicHighlightDirective } from './italic-highlight.directive';



@NgModule({
  declarations: [
    LesProtoPackageComponent,
    NoSAllUPipe,
    ItalicHighlightDirective
  ],
  imports: [
  ],
  exports: [
    LesProtoPackageComponent,
    ItalicHighlightDirective,
    NoSAllUPipe
  ]
})
export class LesProtoPackageModule { }
