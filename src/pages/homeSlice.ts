import { createSlice } from "@reduxjs/toolkit";
import { heroSlides } from "../assets/assets";

export interface homeStoreProps {
  slide: {
    content: string;
    img: string;
  };
  isPlayVideo: boolean;
  numDot: number;
}

const initialState = {
  isPlayVideo: false,
  numDot: 1,
  slide: heroSlides.slide1,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    playVideo(state) {
      state.isPlayVideo = true;
    },
    stopVideo(state) {
      state.isPlayVideo = false;
    },
    updateNumDot(state, action) {
      state.numDot = action.payload;
      if (state.numDot === 1) state.slide = heroSlides.slide1;
      if (state.numDot === 2) state.slide = heroSlides.slide2;
      if (state.numDot === 3) state.slide = heroSlides.slide3;
      if (state.numDot === 4) state.slide = heroSlides.slide4;
    },
    nextNumDotAndSlide(state) {
      state.numDot++;
      if (state.numDot > 4) state.numDot = 1;
      if (state.numDot === 1) state.slide = heroSlides.slide1;
      if (state.numDot === 2) state.slide = heroSlides.slide2;
      if (state.numDot === 3) state.slide = heroSlides.slide3;
      if (state.numDot === 4) state.slide = heroSlides.slide4;
    },
  },
});

export const { playVideo, stopVideo, updateNumDot, nextNumDotAndSlide } =
  homeSlice.actions;

export default homeSlice.reducer;
