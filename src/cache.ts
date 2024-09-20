import { getAllOffers } from "./providers.js";
async function cache() {
  try {
    const offers = await getAllOffers(100);
    console.log("Offers fetched:", offers);

    const offersData = Object.keys(offers).map((provider) => {
      const btcValue = offers[provider];
      return {
        provider,
        btc: btcValue !== null ? String(btcValue) : "0",
      };
    });

    return offersData;
  } catch (error) {
    console.error("Error fetching or processing offers:", error);
    throw error; // Ensure errors are propagated
  }
}
export default cache;
