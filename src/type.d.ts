export type ExternalUrlsType = {
  spotify: string;
};

export type FollowersType = {
  href: string | null;
  total: number;
};

export type ImageType = {
  url: string;
  height: number;
  width: number;
};

export type ArtistType = {
  external_urls: ExternalUrlsType;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type AlbumType = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrlsType;
  href: string;
  id: string;
  images: ImageType[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: RestrictionsType;
  type: string;
  uri: string;
  artists: ArtistType[];
};

export type AddedByType = {
  external_urls: ExternalUrlsType;
  followers: FollowersType;
  href: string;
  id: string;
  type: string;
  uri: string;
};

export type PlaylistType = {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrlsType;
  followers: FollowersType;
  href: string;
  id: string;
  images: ImageType[];
  name: string;
  owner: OwnerType;
  public: boolean | null;
  snapshot_id: string;
  tracks: TracksType;
  type: string;
  uri: string;
};

export type RestrictionsType = {
  reason: string;
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

// Definisi type untuk satu device
type DeviceType = {
  devices: {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
    supports_volume: boolean;
  }[];
};
