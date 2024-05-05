import { motion } from "framer-motion";
import { TrackAlbum } from "../types";
import MusicCard from "./MusicCard";
import { containerVariants, itemVariants } from "../animations/variants";

type SearchResultProps = {
  items: TrackAlbum[];
};

const SearchResult = ({ items }: SearchResultProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="show"
      className="mt-5 flex flex-col gap-2"
    >
      {items.map((item, index) => (
        <MusicCard variant={itemVariants} track={item} key={index} />
      ))}
    </motion.div>
  );
};

export default SearchResult;
