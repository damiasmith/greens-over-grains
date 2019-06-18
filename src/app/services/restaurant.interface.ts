

export interface Restaurant {
    _id: string;
    restaurantName: string;
    address: string;
    phoneNumber: string;
    hours: string;
    website: string;
    foodItems?: Array<object>;
}
