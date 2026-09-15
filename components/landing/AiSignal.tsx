"use client";

import { useInView } from "motion/react";
import { useRef, type CSSProperties } from "react";
import { aiSignalContent, type Locale } from "@/components/landing/data";

// Paths and cards share the same coordinate system: rows at 24%, 50%, 76%.
// Each lane takes a three-second turn within the nine-second CSS cycle.
const lanes = [
  { input: "M192 84 C236 84 232 175 260 175", output: "M360 175 C388 175 384 84 428 84", inputIcon: "idea", outputIcon: "answer" },
  { input: "M192 175 H260", output: "M360 175 H428", inputIcon: "message", outputIcon: "check" },
  { input: "M192 266 C236 266 232 175 260 175", output: "M360 175 C388 175 384 266 428 266", inputIcon: "document", outputIcon: "arrow" },
] as const;

const icons = {
  idea: "M9 18h6 M10 21h4 M8 14c-4-4-1-11 4-11s8 7 4 11l-1 2H9Z",
  message: "M5 4h14v12H9l-4 4Z M8 8h8 M8 12h5",
  document: "M6 3h8l4 4v14H6Z M14 3v5h4 M9 12h6 M9 16h6",
  answer: "M5 17 18 4 M8 4h10v10",
  check: "m5 12 4 4L19 6",
  arrow: "M4 12h16 m-6-6 6 6-6 6",
};

function SignalIcon({ name }: { name: keyof typeof icons }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

export function AiSignal({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const copy = aiSignalContent[locale];

  return (
    <div className="ai-signal" ref={ref} data-running={isInView}>
      <div className="ai-signal-diagram" role="img" aria-label={copy.aria}>
        <svg className="ai-flow-field" viewBox="-217 0 1054 350" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-180 20 C-70 20 -70 84 25 84 M-220 175 H25 M-180 330 C-70 330 -70 266 25 266" />
          <path d="M595 84 C690 84 690 20 800 20 M595 175 H840 M595 266 C690 266 690 330 800 330" />
        </svg>
        <svg className="ai-flow-paths" viewBox="0 0 620 350" preserveAspectRatio="none" aria-hidden="true">
          {lanes.map((lane, index) => (
            <g key={lane.input} style={{ "--lane-delay": `${index * 3}s` } as CSSProperties}>
              <path className="ai-flow-line" d={lane.input} />
              <path className="ai-flow-line ai-flow-line-output" d={lane.output} />
              <path className="ai-flow-packet ai-flow-packet-input" d={lane.input} pathLength="1" />
              <path className="ai-flow-packet ai-flow-packet-output" d={lane.output} pathLength="1" />
            </g>
          ))}
        </svg>
        {lanes.map((lane, index) => (
          <div className="ai-flow-lane" key={lane.input} style={{ "--lane-delay": `${index * 3}s`, "--row": `${24 + index * 26}%` } as CSSProperties} aria-hidden="true">
            <div className="ai-flow-card ai-flow-card-input">
              <span className="ai-flow-card-mark"><SignalIcon name={lane.inputIcon} /></span>
              <span>{copy.inputs[index]}</span>
            </div>
            <div className="ai-flow-card ai-flow-card-output">
              <span className="ai-flow-card-mark"><SignalIcon name={lane.outputIcon} /></span>
              <span>{copy.outputs[index]}</span>
            </div>
          </div>
        ))}
        <div className="ai-lens-anchor" aria-hidden="true">
          <div className="ai-lens-halo" />
          <div className="ai-lens-orbit" />
          <div className="ai-lens">
            <span>{copy.center}</span>
            <small>{copy.centerCaption}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
