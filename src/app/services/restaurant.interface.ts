

export interface Restaurant {
    restaurantName: string;
    address: Array<string>;
    phoneNumber: string;
    hours: Array<string>;
    website: string;
    foodItems?: Array<object>;
}
