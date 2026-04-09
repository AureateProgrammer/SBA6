import { fetchProducts } from './services/apiService';
import { Product } from './models/Product';
import { calculateTax } from './utils/taxCalculator';
import { handleError } from './utils/errorHandler';
