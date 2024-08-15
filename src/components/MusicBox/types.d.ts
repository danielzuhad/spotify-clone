type ExternalUrls = {
  spotify: string;
};

type Image = {
  url: string;
  height: number;
  width: number;
};

type Restrictions = {
  reason: string;
};

type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
};

export type Album = {
  album_type: "album" | "single" | "compilation";
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: "day" | "month" | "year";
  restrictions: Restrictions;
  type: "album";
  uri: string;
  artists: Artist[];
};

export type Track = {
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: Record<string, unknown>;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
};

type Followers = {
  href: string | null;
  total: number;
};

type SpotifyData = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: Record<string, unknown>;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
  is_local: boolean;
};

export interface StateType {
  currentDeviceId: string;
  deviceId: string;
  devices: SpotifyDevice[];
  error: string;
  errorType: ErrorType | null;
  isActive: boolean;
  isInitializing: boolean;
  isMagnified: boolean;
  isPlaying: boolean;
  isSaved: boolean;
  isUnsupported: boolean;
  needsUpdate: boolean;
  nextTracks: SpotifyTrack[];
  playerPosition: "bottom" | "top";
  position: number;
  previousTracks: SpotifyTrack[];
  progressMs: number;
  repeat: RepeatState;
  shuffle: boolean;
  status: Status;
  track: SpotifyTrack;
  volume: number;
}
