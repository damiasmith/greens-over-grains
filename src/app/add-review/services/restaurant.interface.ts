import { Url } from 'url';

export interface Restaurant {
    id: number;
    restaurantName: string;
    address: string;
    phoneNumber: string;
    website: Url;
}
