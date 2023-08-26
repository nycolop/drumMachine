import { audio } from "../assets";

type Keys = "Q" | "W" | "E" | "A" | "S" | "D" | "Z" | "X" | "C";

type Pad = {
  id: number;
  key: Keys;
  triggerName: keyof typeof audio;
  trigger: (typeof audio)[keyof typeof audio];
};

export const pads: Pad[] = [
  { id: 1, key: "Q", triggerName: "heater1" },
  { id: 2, key: "W", triggerName: "heater2" },
  { id: 3, key: "E", triggerName: "heater3" },
  { id: 4, key: "A", triggerName: "heater4" },
  { id: 5, key: "S", triggerName: "clap" },
  { id: 6, key: "D", triggerName: "openHH" },
  { id: 7, key: "Z", triggerName: "kickNHat" },
  { id: 8, key: "X", triggerName: "kick" },
  { id: 9, key: "C", triggerName: "closedHH" },
].map(
  (pad): Pad => ({
    ...pad,
    trigger: audio[pad.triggerName],
  })
);
