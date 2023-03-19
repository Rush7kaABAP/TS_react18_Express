export type TUId = string;
export type TRestaurant = {
      id: TUId,
      name: string,
      menu: Array<TUId>,
      reviews: Array<TUId>,
    };
 
export type TProduct = {
      id:  TUId,
      name:  string,
      price: number,
      ingredients: Array<string>,
    }
  
export type TReview = {
      id: TUId,
      userId: TUId,
      text: string,
      rating: number,
    }
  
export type TUser = {
      id: TUId,
      name: string,
}
  