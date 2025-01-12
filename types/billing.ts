export enum PackId {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE",
}

export type CreditsPack = {
    id: PackId;
    name: string;
    label: string;
    credits: number;
    price: number;
    priceId: string;  // Stripe price ID (for subscription plans) or empty string for one-time payments.  // For example, "price_1QgAIdSA7Hs2y8rbRSB8vvhh" or "" for one-time payments.  // The price ID is required to create a subscription.  // If the price ID is empty, the credit pack can be purchased as a one-time payment.  // Note: You must create
}
export const CreditsPack: CreditsPack[] = [
    {
        id: PackId.SMALL,
        name: "Small Pack",
        label: "1,000 credits",
        credits: 1000,
        price: 999,
        priceId: process.env.STRIPE_SMALL_PACK_PRICE_ID!,
    },
    {
        id: PackId.MEDIUM,
        name: "Medium Pack",
        label: "5,000 credits",
        credits: 5000,
        price: 3999,
        priceId: process.env.STRIPE_MEDIUM_PACK_PRICE_ID!,

    },
    {
        id: PackId.LARGE,
        name: "Large Pack",
        label: "10,000 credits",
        credits: 10000,
        price: 6999,
        priceId: process.env.STRIPE_LARGE_PACK_PRICE_ID!,

    }
]

export const getCreditPack = (id: PackId) => 
    CreditsPack.find((p) => p.id === id);
