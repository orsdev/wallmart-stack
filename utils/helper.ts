/**
 * Calculate the discounted price after applying a percentage discount.
 *
 * @param {number} originalPrice - The original price before the discount.
 * @param {number} discountPercentage - The percentage of the discount.
 * @returns {number} - The discounted price, or original price if input is invalid.
 */
export const calculateDiscountedPrice = (
  originalPrice: number,
  discountPercentage: number
): number => {
  // Validate input types
  if (
    typeof originalPrice !== "number" ||
    typeof discountPercentage !== "number"
  ) {
    console.error("Both originalPrice and discountPercentage must be numbers.");
    return originalPrice;
  }

  // Validate discount percentage range
  if (discountPercentage <= 0 || discountPercentage > 100) {
    console.error("Discount percentage must be between 0 and 100.");
    return originalPrice;
  }

  // Calculate the discount amount
  const discountAmount: number = (discountPercentage / 100) * originalPrice;

  // Calculate the discounted price
  const discountedPrice: number = originalPrice - discountAmount;

  return parseFloat(discountedPrice.toFixed(2));
};

export const UTILS_HELPER = {
  calculateDiscountedPrice,
};
