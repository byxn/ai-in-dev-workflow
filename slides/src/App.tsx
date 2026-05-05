import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "./styles/global.css";
import "./styles/components.css";

import S01Opening      from "./slides/S01Opening";
import S02Eras         from "./slides/S02Eras";
import S03Era4Parallel from "./slides/S03Era4Parallel";
import S04SpecDriven   from "./slides/S04SpecDriven";
import S05Era5Data     from "./slides/S05Era5Data";
import S06Panorama     from "./slides/S06Panorama";
import S07StitchInsight from "./slides/S07StitchInsight";
import S08HumanAiRoles from "./slides/S08HumanAiRoles";
import S09Closing      from "./slides/S09Closing";

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
        <S04SpecDriven />
        <S05Era5Data />
        <S06Panorama />
        <S07StitchInsight />
        <S08HumanAiRoles />
        <S09Closing />
      </div>
    </div>
  );
}
