import { Dispatch, SetStateAction } from "react";

export type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export interface IProduct {
    id: string;
    name: string;
    slug: string;
    price: number;
    count: number;
    discount: number;
    description: string;
    created_at: string; 
    updated_at: string; 
    images: any[];
}

export interface Product {
    id: string;
    name: string;
    count: number;
    price: number;
    discount: number;
}


export interface HeadCell {
    disablePadding: boolean;
    id: keyof Product | 'actions';
    label: string;
    numeric: boolean;
}


export type Order = 'asc' | 'desc';