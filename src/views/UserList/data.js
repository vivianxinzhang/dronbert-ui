import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Anje Keizer',
    orderID: '97428291',
    status: 'active',
    deliveryTime: '',
    address: {
      city: 'San Francisco',
      street: '1865  Pleasant Hill Road'
    },
    phone: '712-351-5711',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    name: 'Jone Doe',
    orderID: '98223429',
    status: 'delivered',
    address: {
      city: 'San Francisco',
      street: '2343 Jeffery Ave, Apt 3'
    },
    phone: '712-351-5711',
    deliveryTime: '4:50pm',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    orderID: '98928239',
    status: 'delivered',
    deliveryTime: '2:35pm',
    name: 'Alexa Richardson',
    address: {
      country: 'USA',
      state: 'Georgia',
      city: 'San Francisco',
      street: '4894  Lakeland Park Drive'
    },
    email: 'alexa.richardson@devias.io',
    phone: '770-635-2682',
    avatarUrl: '/images/avatars/avatar_2.png',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    orderID: '99823324',
    status: 'delivered',
    deliveryTime: '3:50pm',
    name: 'Harry Potter',
    address: {
      country: 'USA',
      state: 'Ohio',
      city: 'San Francisco',
      street: '4158  Hedge Street'
    },
    email: 'anje.keizer@devias.io',
    avatarUrl: '/images/avatars/avatar_5.png',
    phone: '908-691-3242',
    createdAt: 1554930000000
  },
  {
    id: uuid(),
    orderID: '87873239',
    status: 'delivered',
    deliveryTime: '12:50pm',
    name: 'Clarke Gillebert',
    address: {
      country: 'USA',
      state: 'Texas',
      city: 'San Francisco',
      street: '234 Dixon Rd, Apt 15'
    },
    email: 'clarke.gillebert@devias.io',
    phone: '972-333-4106',
    avatarUrl: '/images/avatars/avatar_6.png',
    createdAt: 1554757200000
  },
  {
    id: uuid(),
    orderID: '87873242',
    status: 'delivered',
    deliveryTime: '11:05am',
    name: 'Adam Denisov',
    address: {
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
      street: '317 Angus Road, Apt D1'
    },
    email: 'adam.denisov@devias.io',
    phone: '858-602-3409',
    avatarUrl: '/images/avatars/avatar_1.png',
    createdAt: 1554670800000
  },
  {
    id: uuid(),
    orderID: '77873234',
    status: 'delivered',
    deliveryTime: '10:35am',
    name: 'Ava Gregoraci',
    address: {
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
      street: '2188  Armbrester Drive'
    },
    email: 'ava.gregoraci@devias.io',
    avatarUrl: '/images/avatars/avatar_7.png',
    phone: '415-907-2647',
    createdAt: 1554325200000
  },
  {
    id: uuid(),
    orderID: '69283742',
    status: 'delivered',
    deliveryTime: '9:55am',
    name: 'Emilee Simchenko',
    address: {
      country: 'USA',
      state: 'Nevada',
      city: 'San Francisco',
      street: '1798  Hickory Ridge Drive'
    },
    email: 'emilee.simchenko@devias.io',
    phone: '702-661-1654',
    avatarUrl: '/images/avatars/avatar_8.png',
    createdAt: 1523048400000
  },
];
