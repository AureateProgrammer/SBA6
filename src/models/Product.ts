import { calculateDiscount } from "../utils/discountCalculator";
export class Product{
    title: string;
    description: string;
    price: number;
    rating: number;
    category: string;

    constructor(title: string, description: string, price: number, rating: number, category: string) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.category = category;
    }

    displayDetails(): string {
        return `Title: ${this.title}\nDescription: ${this.description}\nPrice: $${this.price.toFixed(2)}\nRating: ${this.rating}/5`;
    }
    
getPriceWithDiscount(discountPercent: number): number {
    const discountAmount = calculateDiscount(this.price, discountPercent);
    return this.price - discountAmount;
}
}