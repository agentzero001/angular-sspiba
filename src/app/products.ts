export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    MoreData: '123 jens is so jolly'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    MoreData: 'die fotzen wollen shoppen ich könnte kotzen'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    MoreData: '123 jens is so jolly'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/