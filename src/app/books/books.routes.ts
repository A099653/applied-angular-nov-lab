import { Routes } from '@angular/router';

import { BooksComponents } from './books.components';

export const BOOKS_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponents,
    providers: [],
  },
];
