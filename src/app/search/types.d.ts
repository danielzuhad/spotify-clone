// Interface for URLs with Spotify links
interface SpotifyExternalURLs {
  spotify: string;
}

// Interface for common properties of Spotify entities
interface SpotifyEntity {
  external_urls: SpotifyExternalURLs;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

// Interface for Artist entity
interface Artist extends SpotifyEntity {}

// Interface for an Image in Spotify's API
interface Image {
  height: number;
  url: string;
  width: number;
}

// Interface for an Album entity
interface Album extends SpotifyEntity {
  album_type: string;
  artists: Artist[];
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
}

// Interface for External IDs (such as ISRC)
interface ExternalIds {
  isrc: string;
}

// Interface for a Track entity
interface Track extends SpotifyEntity {
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  is_local: boolean;
  is_playable: boolean;
  popularity: number;
  preview_url: string;
  track_number: number;
}

// Root object combining track and album information
export interface TrackAlbum {
  album: Album;
  duration_ms: number;
  name: string;
  uri: string;
}
