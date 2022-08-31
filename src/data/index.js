const img = {
  salad: require('../img/salad.png'),
  fastfood: require('../img/fast-food.png'),
  donut: require('../img/donut.png'),
  hamburger: require('../img/hamburger.png'),
  icecream: require('../img/ice-cream.png'),
  instantnoodles: require('../img/instant-noodles.png'),
  lemonjuice: require('../img/lemon-juice.png'),
  pizzaslice: require('../img/pizza-slice.png'),
};

const dataImg = [
  {
    title: 'Soup',
    url: img.instantnoodles,
  },
  {
    title: 'Salad',
    url: img.salad,
  },
  {
    title: 'Rice',
    url: img.fastfood,
  },
  {
    title: 'Donut',
    url: img.donut,
  },
  {
    title: 'Ice-cream',
    url: img.icecream,
  },
  {
    title: 'Drinks',
    url: img.lemonjuice,
  },
  {
    title: 'Pizza',
    url: img.pizzaslice,
  },
  {
    title: 'Hamburger',
    url: img.hamburger,
  },
  {
    title: 'Soup',
    url: img.instantnoodles,
  },
  {
    title: 'Salad',
    url: img.salad,
  },
  {
    title: 'Rice',
    url: img.fastfood,
  },
  {
    title: 'Donut',
    url: img.donut,
  },
  {
    title: 'Ice-cream',
    url: img.icecream,
  },
  {
    title: 'Drinks',
    url: img.lemonjuice,
  },
  {
    title: 'Pizza',
    url: img.pizzaslice,
  },
  {
    title: 'Hamburger',
    url: img.hamburger,
  },
];

export const tabs = [
  'Today',
  'Chips',
  'Fish',
  'Tea',
  'Burger',
  'Coffee',
  'Drinks',
  'Breakfast',
  'Diners',
];

const subcategories = [
  {
    title: 'Drinks',
    url: img.lemonjuice,
  },
  {
    title: 'Pizza',
    url: img.pizzaslice,
  },
  {
    title: 'Hamburger',
    url: img.hamburger,
  },
];

export const popularFood = dataImg.map((item, index) => {
  return {
    ...item,
    key: `${item.title}-${index}`,
    price: +`${+index * 3}` + 23,
    description: 'Roman Ostash dolor sit amet, consectetur',
    color: `#${index * 2}66`,
    subcategories: subcategories,
  };
});

export const food = dataImg.map((item, index) => {
  return {
    ...item,
    key: `${item.title}-${index}`,
    price: +`${+index * 3}` + 23,
    description: 'Roman Ostash dolor sit amet, consectetur',
    color: `#${(index + 6) * 3}65`,
    subcategories: subcategories,
  };
});
