export const ROUTES = {
    cart: '/cart',
    dishes: '/dishes',
    dish: '/dish/:dishId',
  };
  
  export const GET_ROUTES = {
    getDishRoute: (dishId:string) => `/dish/${dishId}`,
  };
  