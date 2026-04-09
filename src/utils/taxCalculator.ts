export function calculateTax(price: number, category: string): number {
    const isGrocery = category.toLowerCase() === 'groceries';
    const taxRate = isGrocery ? 0.03 : 0.0475;
    
    return price * taxRate;
}