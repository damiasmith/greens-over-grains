

export interface Restaurant {
    restaurantName: string;
    address: string;
    phoneNumber: string;
    hours: string;
    website: string;
    foodItems?: Array<object>;
}
