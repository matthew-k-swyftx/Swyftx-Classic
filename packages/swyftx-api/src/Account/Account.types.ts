export type ProfileCurrency = {
  id: number;
  code: string;
};

export type Profile = {
  currency: ProfileCurrency;
};

export type User = {
  ipAddress: string;
  profile: Profile;
};

export type GetProfileResponse = {
  user: User;
};

export type GetProfileBalancesResponse = {
  assetId: number;
  availableBalance: string;
  stakingBalance: string;
};
