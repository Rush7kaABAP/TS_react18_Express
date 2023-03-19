import {TProduct, TRestaurant, TReview} from '../model/backendModel';

const router = require("express").Router();
const { restaurants, products, reviews, users } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/restaurants", (req: any, res: any, next:Function) => {
  reply(res, restaurants);
});

router.get("/products", (req: any, res: any, next: Function) => {
  const { restaurantId , productId } = req.query;
  let result: (Array<TProduct> | TProduct) = products;

  if (restaurantId) {
    const restaurant: (TRestaurant) = getById(restaurants)(restaurantId);
    if (restaurant) {
      result = restaurant.menu.map(getById(result));
    }
  }

  if (!restaurantId && productId) {
    result = getById(result)(productId);
  }
  reply(res, result);
});

router.get("/reviews", (req: any, res: any, next: Function) => {
  const { restaurantId } = req.query;
  let result:(Array<TReview> | TReview) = reviews;
  if (restaurantId) {
    const restaurant = getById(restaurants)(restaurantId);
    if (restaurant) {
      result = restaurant.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get("/users", (req: any, res: any, next: Function) => {
  reply(res, users);
});

module.exports = router;
