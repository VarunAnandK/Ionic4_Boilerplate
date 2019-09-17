import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { GroupByPipe } from 'src/pipe/groupby.pipe';


@NgModule({
  declarations: [LabelComponent, GroupByPipe],
  imports: [
    CommonModule
  ],
  exports : [LabelComponent, GroupByPipe]
})
export class LabelModule { }
