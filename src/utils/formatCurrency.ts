export default function formatCurrency(price: string) {
  const format = Intl.NumberFormat("EN-us").format(+price);
  return format;
}
export function formatCurrencyVietnamese(price: string) {
  const format = Intl.NumberFormat("vi-VN").format(+price);
  return format.slice(0, -3) + "000";
}
