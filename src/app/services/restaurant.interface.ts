
export interface Restaurant {
    _id?: string,
    restaurantName: string;
    address: Array <string>;
    phoneNumber: string;
    hours: Array <string>;
    website: string;
    foodItems?: Array<object>;
}
