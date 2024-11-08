import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="flex gap-8">
    <div class="col-span-1">
      <app-books-table [books]="store.currentPage()" />
    </div>
    <div class="col-span-1">
      <app-books-by-century [books]="store.entities()" />
    </div>
  </div>`,
  styles: ``,
})
export class BooksComponents {}
