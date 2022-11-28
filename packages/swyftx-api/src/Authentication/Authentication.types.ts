// Refresh Access Token
export type RefreshAccessTokenData = {
  apiKey: string;
};

export type RefreshAccessTokenResponse = {
  accessToken: string;
  scope: string;
};

// Logout
export type LogoutResponse = {
  success: string;
};

// Get Scope
export type Scope = {
  desc: string;
  display: string;
  key: string;
  state: number;
};

export type GetScopeResponse = {
  [scope: string]: Scope;
};

// Get Keys
export type GetKeysResponse = {
  id: string;
  label: string;
  scope: string;
  created: string;
};

//Revoke Key/s
export type RevokeKeyData = {
  keyId: string;
};

export type RevokeKeyResponse = {
  status: string;
};
