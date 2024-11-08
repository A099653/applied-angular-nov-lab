import { Routes } from '@angular/router';

import { BooksComponents } from './books.components';
import { BooksService } from './service/books.service';
import { BooksStore } from './service/books.store';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponents,
    providers: [BooksService, BooksStore],
  },
];
