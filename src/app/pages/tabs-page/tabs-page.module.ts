import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsGroupModule } from 'src/app/shared/tabs-group/tabs-group.module';
import { TabsPageComponent } from './tabs-page.component';

@NgModule({
  declarations: [TabsPageComponent],
  imports: [CommonModule, TabsGroupModule],
})
export class TabsPageModule {}
