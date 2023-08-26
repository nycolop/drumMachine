import { useRef, useState, useEffect } from "react";
import { audio } from "./assets";
import { pads } from "./lib";

export default function App() {
  const [currentPadId, setCurrentPadId] = useState<number>(0);
  const currentPad = useRef<HTMLAudioElement | null>(null);

  const triggerer = () => {
    currentPad?.current?.play();
  };

  return (
    <main id="drum-machine">
      {pads.map((pad) => (
        <article key={pad.id} id={pad.triggerName} className="drum-pad">
          <audio
            className="clip"
            ref={currentPad}
            id={pad.key}
            src={pad.trigger}
          ></audio>
          <button onClick={triggerer}>{pad.key}</button>
        </article>
      ))}

      <div id="display"></div>
    </main>
  );
}
