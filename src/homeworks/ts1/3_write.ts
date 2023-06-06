/**
 * Функции написанные здесь пригодятся на последующих уроках
 * */

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: string;
  category: Category;
};

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

export const createRandomProduct = (createdAt: string): Product => ({
  id: '0',
  name: 'random_product',
  photo: 'url',
  desc: 'desc',
  createdAt,
  oldPrice: 50,
  price: '100',
  category: {
    id: '0',
    name: 'random_category',
  },
});

export const createRandomOperation = (createdAt: string): Operation => ({
  type: 'Cost',
  id: '0',
  name: 'random_operation',
  desc: 'desc',
  createdAt,
  amount: 100,
  category: {
    id: '0',
    name: 'random_category',
  },
});
