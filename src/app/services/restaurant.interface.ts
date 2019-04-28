import { Url } from 'url';

export interface Restaurant {
    id: number;
    restaurantName: string;
    address: string;
    phoneNumber: string;
    hours: string;
    website: Url;
}
