import clap from "./audio/clap.mp3";
import closedHH from "./audio/closed-hh.mp3";
import heater1 from "./audio/heater-1.mp3";
import heater2 from "./audio/heater-2.mp3";
import heater3 from "./audio/heater-3.mp3";
import heater4 from "./audio/heater-4.mp3";
import kickNHat from "./audio/kick-n-hat.mp3";
import kick from "./audio/kick.mp3";
import openHH from "./audio/open-hh.mp3";

type Audio = {
  [key: string]: string;
};

export const audio: Audio = {
  clap,
  closedHH,
  heater1,
  heater2,
  heater3,
  heater4,
  kickNHat,
  kick,
  openHH,
};

export default {
  audio,
};
