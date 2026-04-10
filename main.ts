import { Product } from './src/models/Product';
import { fetchProducts } from './src/services/apiService';
import { handleError } from './src/utils/errorHandler';
import { calculateTax } from './src/utils/taxCalculator';

type ProductApiResponse = {
    title: string;
    description: string;
    price: number;
    rating: number;
    discountPercentage: number;
    category: string;
};

async function startApp() {
    try {
        const rawProducts = await fetchProducts();

        const productInstances = rawProducts.map((item: ProductApiResponse) => {
            return new Product(
                item.title,
                item.description,
                item.price,
                item.rating,
                item.discountPercentage,
                item.category
            );
        });

        productInstances.forEach((product: Product) => {
            console.log("===================================");
            console.log(product.displayDetails());
            
            const finalPrice = product.getPriceWithDiscount(product.discountPercentage);
            console.log(`Discounted Price: $${finalPrice.toFixed(2)}`);

            const taxAmount = calculateTax(finalPrice, product.category);
            console.log(`Tax Amount: $${taxAmount.toFixed(2)}`);
            
            const total = finalPrice + taxAmount;
            console.log(`Total after Tax: $${total.toFixed(2)}`);
        });

    } catch (error) {
        handleError(error);
    }
}

startApp();
