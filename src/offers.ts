import { getOfferFromPaybis } from "./providers";

export default async function offer(params: any, context: any) {
  const btc = await getOfferFromPaybis(100);
  return {
    message: btc,
  };
}
