import { useDispatch } from "react-redux";
import { play, pause } from "@/store/slices/playerSlice";

const dispatch = useDispatch();
dispatch(play());
