import { ChangeDetectionStrategy, Component, ContentChildren, QueryList } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TabComponent } from './tab/tab.component';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsGroupComponent {
  @ContentChildren(TabComponent) items!: QueryList<TabComponent>;

  private _items$ = new BehaviorSubject<TabComponent[]>([]);

  public items$ = this._items$.asObservable();

  private _activeIndex$ = new ReplaySubject<number>(1);

  public item$ = this._activeIndex$.pipe(
    mergeMap((i) => this.items$.pipe(map((items) => items[i])))
  );

  ngAfterContentInit(): void {
    this.items.changes.subscribe((items: QueryList<TabComponent>) => {
      console.log({ items });
      this._collectItems(items);
    });

    this.items.notifyOnChanges();
  }

  public onTabClick(index: number) {
    this._activeIndex$.next(index);
  }

  private _collectItems(items: QueryList<TabComponent>) {
    this._items$.next(items.map((item) => item));
  }
}
