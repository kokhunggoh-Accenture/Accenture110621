import { NgModule } from "@angular/core";
import { CustomLoopDirective } from "src/app/_directives/custom-loop.directive";
import { HighlightDirective } from "src/app/_directives/highlight.directive";
import { RotateAnimationDirective } from "src/app/_directives/rotate-animation.directive";

@NgModule({
  declarations: [ CustomLoopDirective, HighlightDirective, RotateAnimationDirective ],
  exports: [ CustomLoopDirective, HighlightDirective, RotateAnimationDirective ]
})

export class SharedModule {}