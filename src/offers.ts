import { getAllOffers } from "./providers.js";

export default async function offers(amount: any, context: any) {
  return getAllOffers(amount);
}
