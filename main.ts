import { fetchProducts } from './services/api.service';
import { Product } from './models/Product';
import { calculateTax } from './utils/taxCalculator';
import { handleError } from './utils/errorHandler';

async function startApp() {
    try {
        const rawProducts = await fetchProducts();

        const productInstances = rawProducts.map((item: any) => {
            return new Product(
                item.title,
                item.description,
                item.price,
                item.discountPercentage,
                item.category
            );
        });

        productInstances.forEach((product: Product) => {
            console.log("===================================");
            console.log(product.displayDetails());
            
            const finalPrice = product.getPriceWithDiscount(product.rating);
            console.log(`Discounted Price: $${finalPrice.toFixed(2)}`);

            const taxAmount = calculateTax(product.price, product.category);
            console.log(`Tax Amount: $${taxAmount.toFixed(2)}`);
            
            const total = product.price + taxAmount;
            console.log(`Total after Tax: $${total.toFixed(2)}`);
        });

    } catch (error) {
        handleError(error);
    }
}