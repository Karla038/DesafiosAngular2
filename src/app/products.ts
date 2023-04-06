export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export const products = [
  {
    id: 1,
    name: 'IPhone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: [''],
  },
  {
    id: 2,
    name: 'IPhone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ['mini-min.png'],
  },
  {
    id: 3,
    name: 'IPhone Standard',
    price: 299,
    description: 'Has new features',
    images: ['iphonestand-min.png'],
  },
  {
    id: 4,
    name: 'IPhone 11 Pro',
    price: 499,
    description:
      ' The most contained option in size talking about Apple smartphones',
    images: ['iphone11-min.png'],
  },
  {
    id: 5,
    name: 'IPhone 12 mini',
    price: 699,
    description:
      'AirPlay for screen mirroring and playback of photos and videos',
    images: ['iphone12-min.png'],
  },
  {
    id: 6,
    name: 'IPhone 14',
    price: 799,
    description:
      'Bionic A15 chip with 5-core GPU is the engine that drives the latest features',
    images: ['iphone14-min.png'],
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
