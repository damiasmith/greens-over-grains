

export interface FoodItem {
    _id?: string,
    itemName: string;
    restaurantId: string;
    filters: Array<string>;
    rating: string;
    image?: any;
  }
