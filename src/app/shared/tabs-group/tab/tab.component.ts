import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'tab[label]',
  template: '<ng-template><ng-content></ng-content></ng-template>',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() label!: string;

  @ViewChild(TemplateRef) public content!: TemplateRef<any>;
}
