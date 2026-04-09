function calculateDiscount(originalPrice:number discountPercent:number) {
    const discountAmount = originalPrice * (discountPercent / 100);
    return originalPrice - discountAmount;
}