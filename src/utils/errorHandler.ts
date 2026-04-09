export function handleError(error: any): void {
    const message = error instanceof Error ? error.message : "An unexpected error occurred";
    console.error(`[CUSTOMError]: ${message}`);
}