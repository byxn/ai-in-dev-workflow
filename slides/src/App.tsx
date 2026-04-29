import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "./styles/global.css";
import "./styles/components.css";

import S01Opening from "./slides/S01Opening";
import S02Eras from "./slides/S02Eras";
import S03Era1 from "./slides/S03Era1";
import S04Era2 from "./slides/S04Era2";
import S05Era3 from "./slides/S05Era3";
import S06ClaudeCodeCLI from "./slides/S06ClaudeCodeCLI";
import S07Era4Parallel from "./slides/S07Era4Parallel";
import S08Era5Data from "./slides/S08Era5Data";
import S10Panorama from "./slides/S10Panorama";
import S09Era5Metaphor from "./slides/S09Era5Metaphor";
import S14Also from "./slides/S14Also";
import S11SpecDriven from "./slides/S11SpecDriven";
import S12NotebookLM from "./slides/S12NotebookLM";
import S13StitchInsight from "./slides/S13StitchInsight";
import S16Closing from "./slides/S16Closing";

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
        <S03Era1 />
        <S04Era2 />
        <S05Era3 />
        <S06ClaudeCodeCLI />
        <S07Era4Parallel />
        <S08Era5Data />
        <S09Era5Metaphor />
        <S11SpecDriven />
        <S10Panorama />
        <S12NotebookLM />
        <S13StitchInsight />
        <S14Also />
        <S16Closing />
      </div>
    </div>
  );
}
