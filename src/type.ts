export type PlaylistType = {
  id?: "5wkeNmxMux2oqkfg1McKg1";
  name?: "despair";
  owner?: object[];
  collaborative?: boolean;
  description?: string;
  images?: Array<{ url: string }>;
  type?: "playlist";
};

export type SessionType = {
  user: {
    name: string;
    email: string;
    image: string;
    accessToken: string;
    refreshToken: string;
    username?: string | undefined;
  };
};
