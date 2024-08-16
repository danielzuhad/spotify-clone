import { PlaylistType, SessionType } from "@/type";

export const playlistData = (session: SessionType | null) => {
  const data: PlaylistType = {
    collaborative: false,
    description: "",
    external_urls: { spotify: "" },
    followers: { href: null, total: 0 },
    href: "",
    id: "",
    images: [],
    name: "Liked Songs",
    owner: {
      display_name: session?.user.name,
      href: "",
      id: "",
      type: "",
      uri: "",
      external_urls: { spotify: "" },
    },
    public: null,
    snapshot_id: "",
    tracks: {
      href: "",
      limit: 0,
      next: null,
      offset: 0,
      previous: null,
      total: 0,
      items: [],
    },
    type: "playlist",
    uri: "",
  };

  return data;
};
