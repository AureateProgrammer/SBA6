fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);


class Product{
    title: string;
    description: string;
    price: number;
    rating: number;

    constructor(title: string, description: string, price: number, rating: number) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.rating = rating;
        
        DisplayDetails(): string {
            return `Title: ${this.title}\nDescription: ${this.description}\nPrice: $${this.price.toFixed(2)}\nRating: ${this.rating}/5`;
        }



    }
}