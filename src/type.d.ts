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

export type TrackType = {
  album: AlbumType;
  artists: ArtistType[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean?: string;
    upc?: string;
  };
  external_urls: ExternalUrlsType;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: object | null;
  restrictions: RestrictionsType | null;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

export type AddedByType = {
  external_urls: ExternalUrlsType;
  followers: FollowersType;
  href: string;
  id: string;
  type: string;
  uri: string;
};

export type TrackItemType = {
  added_at: string;
  added_by: AddedByType;
  is_local: boolean;
  track: TrackType;
};

export type TracksType = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: TrackItemType[];
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
