export class ProductService{
  // tslint:disable-next-line:typedef
  getProducts() {
    return [
      {
        imageUrl: 'http://loremflickr.com/300/150?random=1',
        productName: '1 Bob Coin',
        releasedDate: new Date(2016, 5, 5),
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 2
      },
      {
        imageUrl: 'http://loremflickr.com/300/150?random=2',
        productName: '10 Bob Coins',
        releasedDate: 'October 31, 2016',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 2,
        numOfReviews: 12
      },
      {
        imageUrl: 'http://loremflickr.com/300/150?random=3',
        productName: '25 Bob Coins',
        releasedDate: 'July 30, 2016',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 5,
        numOfReviews: 2
      },
      {
        imageUrl: 'http://loremflickr.com/300/150?random=4',
        productName: '50 Bob Coins',
        releasedDate: 'October 31, 2016',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 1,
        numOfReviews: 13
      },
      {
        imageUrl: 'http://loremflickr.com/300/150?random=5',
        productName: '100 Bob Coins',
        releasedDate: 'October 31, 2016',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 4,
        numOfReviews: 25
      },
      {
        imageUrl: 'http://loremflickr.com/300/150?random=6',
        productName: '250 Bob Coins',
        releasedDate: 'October 31, 2016',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 5,
        numOfReviews: 120
      },
      {
        imageUrl: 'http://loremflickr.com/300/150?random=7',
        productName: '400 Bob Coins',
        releasedDate: 'October 31, 2016',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 3,
        numOfReviews: 2
      },
      {
        imageUrl: 'http://loremflickr.com/300/150?random=8',
        productName: '800 Bob Coins',
        releasedDate: 'October 31, 2016',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
        rating: 0,
        numOfReviews: 0
      }];
  }
}
