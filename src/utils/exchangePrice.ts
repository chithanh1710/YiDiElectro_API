export default async function exchangeRate(
  lang: string,
  price: string,
  setPrice: (value: React.SetStateAction<string>) => void
) {
  if (lang !== "English") {
    const fromCurrency = "USD";
    const toCurrency = "VND";
    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await res.json();
    const exchangeRate = data.rates[toCurrency];
    setPrice((Number(price) * exchangeRate).toFixed(2));
  }
}
