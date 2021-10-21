import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioSection } from './bio.section';

@NgModule({
  declarations: [BioSection],
  imports: [CommonModule],
  exports: [BioSection],
})
export class BioModule {}
