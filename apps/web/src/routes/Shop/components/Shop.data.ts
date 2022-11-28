export type LedgerNanoType = {
  title: string;
  recommended: boolean;
  imageUrl: string;
  price: string;
  shipping: string;
  buyUrl: string;
  description: string;
  features: string[];
};

export const ledgerNanoX: LedgerNanoType = {
  title: "Ledger Nano X",
  recommended: true,
  imageUrl: "/ledger_nano_x.webp",
  price: "A$249",
  shipping: "Free Shipping (14 - 21 days)",
  buyUrl: "https://shop.ledger.com/products/ledger-nano-x/onyx-black",
  description:
    "The next level hardware wallet: securely manage your crypto, anywhere you go. The Ledger Nano X combines ease-of-use and flexibility while ensuring the highest standard of crypto security.",
  features: [
    "Up-to 100 wallet apps at once",
    "USB Type C + Bluetooth Connectivity",
    "100mAh battery",
    "128 x 64 pixel screen",
  ],
};
export const ledgerNanoSPlus: LedgerNanoType = {
  title: "Ledger Nano S Plus",
  recommended: false,
  imageUrl: "/ledger_nano_s_plus.webp",
  price: "A$129",
  shipping: "$25 Shipping (14 - 21 days)",
  buyUrl: "https://shop.ledger.com/products/ledger-nano-s-plus/matte-black",
  description:
    "Secure your assets and explore Web3 with the new Ledger Nano S Plus. Take the iconic Ledger Nano S, then make it DeFi and NFT-friendly.",
  features: [
    "Up-to 100 wallet apps at once",
    "USB Type C",
    "No battery",
    "128 x 64 pixel screen",
  ],
};
