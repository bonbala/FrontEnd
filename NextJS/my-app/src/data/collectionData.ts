// src/data.ts
import type { StaticImageData } from 'next/image'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'

export interface Product {
  id: number
  name: string
  price: number             // để dễ tính toán, lưu số nguyên (đồng)
  image: StaticImageData
  colors: string[]
  sizes: string[]
  fabrics: string[]
}

export const productList: Product[] = [
  {
    id: 1,
    name: 'Shiver No More Overcoat',
    price: 25097000,
    image: product1,
    colors: ['Black', 'Brown'],
    sizes: ['M – 40S', 'L – 42R', '43'],
    fabrics: ['Loden']
  },
  {
    id: 2,
    name: 'Alpine Hunter Loden Coat',
    price: 22050000,
    image: product2,
    colors: ['Camel', 'Charcoal'],
    sizes: ['S – 38S', 'M – 40S', '41'],
    fabrics: ['Wool']
  },
  {
    id: 3,
    name: 'Classic Heritage Jacket',
    price: 19800000,
    image: product3,
    colors: ['Green', 'Navy Blue'],
    sizes: ['L – 42R', '47', '53'],
    fabrics: ['Tweed']
  },
  {
    id: 4,
    name: 'Modern Loden Trench',
    price: 27500000,
    image: product1,
    colors: ['Black'],
    sizes: ['39', 'S – 38S', 'XL – 46R'],
    fabrics: ['Loden', 'Wool']
  },
  {
    id: 5,
    name: 'Rustic Alpine Coat',
    price: 23000000,
    image: product2,
    colors: ['Brown', 'Green'],
    sizes: ['47', 'L – 42R', '49'],
    fabrics: ['Tweed']
  },
  {
    id: 6,
    name: 'Urban Loden Blazer',
    price: 24250000,
    image: product3,
    colors: ['Charcoal', 'Navy Blue'],
    sizes: ['M – 40S', 'S – 38S', '37'],
    fabrics: ['Wool']
  },
  {
    id: 7,
    name: 'Alpine Explorer Jacket',
    price: 26000000,
    image: product1,
    colors: ['Camel', 'Black'],
    sizes: ['39', '47', '51'],
    fabrics: ['Loden']
  },
  {
    id: 8,
    name: 'Mountain Heritage Coat',
    price: 25500000,
    image: product2,
    colors: ['Green'],
    sizes: ['M – 40S', 'L – 42R', 'XL – 46L'],
    fabrics: ['Wool', 'Tweed']
  },
  {
    id: 9,
    name: 'Nordic Winter Loden',
    price: 29000000,
    image: product3,
    colors: ['Charcoal'],
    sizes: ['39', 'S – 38S', '55'],
    fabrics: ['Loden']
  },
  {
    id: 10,
    name: 'Summit Light Coat',
    price: 21500000,
    image: product1,
    colors: ['Navy Blue', 'Brown'],
    sizes: ['47', 'L – 42R', '45'],
    fabrics: ['Tweed']
  },
  {
    id: 11,
    name: 'Classic Wool Overcoat',
    price: 24500000,
    image: product2,
    colors: ['Black', 'Camel'],
    sizes: ['M – 40S', 'S – 38S', 'XXL – 48R'],
    fabrics: ['Wool']
  },
  {
    id: 12,
    name: 'Heritage Loden Parka',
    price: 28000000,
    image: product3,
    colors: ['Green', 'Charcoal'],
    sizes: ['39', '47', 'XXL – 50R'],
    fabrics: ['Loden', 'Wool']
  },
]

