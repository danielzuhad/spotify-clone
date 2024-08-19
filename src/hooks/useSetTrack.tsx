import { useDispatch } from "react-redux";
import { setTrack } from "@/redux/playerSlice";
import { TrackType } from "@/types/track";

// Define the custom hook
const useSetTrack = () => {
  const dispatch = useDispatch();

  return (data: TrackType[]) => {
    // Convert the input to an array of TrackType
    const trackPayloads: TrackType[] = Array.isArray(data) ? data : [data];

    dispatch(setTrack(trackPayloads));
  };
};

export default useSetTrack;
