import { getAllOffers } from "./providers.js";

async function cache() {
  // Fetch offers from all providers
  const offers = await getAllOffers(100);

  // Process the offers into a structured format
  const offersData = Object.keys(offers).map((provider) => {
    const btcValue = offers[provider];
    return {
      provider,
      btc: btcValue !== null ? Number(btcValue) : 0, // Default to 0 if null
    };
  });

  // Return the array of offersData
  return offersData;
}

export default cache;
