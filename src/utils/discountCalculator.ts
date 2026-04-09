export function calculateDiscount(originalPrice: number, discountPercent: number): number {
    const discountAmount = originalPrice * (discountPercent / 100);    
    return discountAmount;
}