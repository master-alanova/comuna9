/**
 * Formats a price in Argentine Pesos (ARS)
 * Example: 1250 -> "$ 1.250"
 * Example: 1250.5 -> "$ 1.250,50"
 */
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: price % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2,
    }).format(price).replace('ARS', '$');
}
