// from general album
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
