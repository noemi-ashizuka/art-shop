const SHOP_DATA = [
  {
    id: 1,
    title: 'Pottery',
    routeName: 'pottery',
    items: [
      {
        id: 1,
        name: 'White minimalist vase',
        imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        price: 25
      },
      {
        id: 2,
        name: 'Handpainted little vase',
        imageUrl: 'https://images.unsplash.com/photo-1572186192734-e82b57dc4435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        price: 18
      },
      {
        id: 3,
        name: 'Set of rustic bowls',
        imageUrl: 'https://images.unsplash.com/photo-1530006498959-b7884e829a04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
        price: 35
      },
      {
        id: 4,
        name: 'White plates with black rim',
        imageUrl: 'https://images.unsplash.com/photo-1563136838-1e0f8d93e475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        price: 25
      },
      {
        id: 5,
        name: 'Blue Ceramic tea set',
        imageUrl: 'https://images.unsplash.com/photo-1582254951277-680ec7cb58e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
        price: 18
      },
      {
        id: 6,
        name: 'Artistic white cups',
        imageUrl: 'https://images.unsplash.com/photo-1523367118146-091f762cd8ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
        price: 14
      },
      {
        id: 7,
        name: 'Green tea set',
        imageUrl: 'https://images.unsplash.com/photo-1582966953402-a86e32ecdf75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 18
      },
      {
        id: 8,
        name: 'Colorful plates',
        imageUrl: 'https://images.unsplash.com/photo-1515017812403-84a3777bcf21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Vase',
        imageUrl: 'https://images.unsplash.com/photo-1529136490842-e2da7a4c7b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=590&q=80',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Prints',
    routeName: 'prints',
    items: [
      {
        id: 10,
        name: 'Souls',
        imageUrl: 'https://images.unsplash.com/photo-1574733662692-7b6fd93a7dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80',
        price: 220
      },
      {
        id: 11,
        name: 'Pink and dark',
        imageUrl: 'https://images.unsplash.com/photo-1586191582056-ffebbc7c17e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80',
        price: 280
      },
      {
        id: 12,
        name: 'Foggy rainbow',
        imageUrl: 'https://images.unsplash.com/photo-1566544095434-79e8d4573559?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=692&q=80',
        price: 110
      },
      {
        id: 13,
        name: 'Layers',
        imageUrl: 'https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
        price: 160
      },
      {
        id: 14,
        name: 'Calligraphy print',
        imageUrl: 'https://images.unsplash.com/photo-1532568970638-1c28d870b06d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        price: 160
      },
      {
        id: 15,
        name: 'The blue',
        imageUrl: 'https://images.unsplash.com/photo-1486291301608-a503c774721a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2153&q=80',
        price: 160
      },
      {
        id: 16,
        name: 'Complex Architecture',
        imageUrl: 'https://images.unsplash.com/photo-1508770190405-366087337ec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 190
      },
      {
        id: 17,
        name: 'Emptyness',
        imageUrl: 'https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=740&q=80',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Sculpture',
    routeName: 'sculpture',
    items: [
      {
        id: 18,
        name: 'Demon',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1569154707792-459d556b4bc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        price: 125
      },
      {
        id: 19,
        name: 'Cover',
        imageUrl: 'https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        price: 90
      },
      {
        id: 20,
        name: 'Sweet dreams',
        imageUrl: 'https://images.unsplash.com/photo-1567615658253-36de8f4f7cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
];

export default SHOP_DATA;