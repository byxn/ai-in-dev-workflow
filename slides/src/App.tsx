import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "./styles/global.css";
import "./styles/components.css";

import S01Opening      from "./slides/S01Opening";
import S02Eras         from "./slides/S02Eras";
import S03Era4Parallel from "./slides/S03Era4Parallel";
import S04Era5Data     from "./slides/S04Era5Data";
import S06SpecDriven   from "./slides/S06SpecDriven";
import S05Panorama     from "./slides/S05Panorama";
import S07NotebookLM   from "./slides/S07NotebookLM";
import S08StitchInsight from "./slides/S08StitchInsight";
import S10HumanAiRoles from "./slides/S10HumanAiRoles";
import S11Closing      from "./slides/S11Closing";

export default function App() {
  const deckRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const revealRef = useRef<any>(null);

  useEffect(() => {
    if (revealRef.current) return;
    revealRef.current = new Reveal(deckRef.current!, {
      hash: true,
      slideNumber: "c/t",
      transition: "fade",
      transitionSpeed: "fast",
      controlsTutorial: false,
      fragmentInURL: false,
      center: false,
      width: 1920,
      height: 1080,
      margin: 0.04,
    });
    revealRef.current.initialize();

    return () => {
      revealRef.current?.destroy();
      revealRef.current = null;
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        <S01Opening />
        <S02Eras />
        <S03Era4Parallel />
        <S04Era5Data />
        <S06SpecDriven />
        <S05Panorama />
        <S07NotebookLM />
        <S08StitchInsight />
        <S10HumanAiRoles />
        <S11Closing />
      </div>
    </div>
  );
}
