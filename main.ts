import { fetchProducts } from './services/apiService';
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
        