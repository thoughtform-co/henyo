import svgPaths from "./svg-215tiu9s6z";
import imgRectangle from "figma:asset/2a8d20e3f1d39e1267a9f4e1bb3e684c627d1686.png";

function Group1() {
  return (
    <div className="absolute inset-[46.74%_71.89%_46.65%_17.69%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 74">
        <g id="Group 2">
          <path d={svgPaths.p22409680} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p65d2400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[45.06%_85.8%_45.09%_5.94%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188.71 110.413">
        <g id="Group 1">
          <path d={svgPaths.p3ddcf700} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p28077200} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3c9bdc80} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p28745200} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p22836c00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p2afb2340} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.pf10eb0} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p2f5acf70} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p23645500} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p2b8d4980} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p22a78100} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p26044280} fill="var(--fill-0, black)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[47.89%_57.43%_48.02%_30.78%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.277 45.7659">
        <g id="Group 3">
          <path d={svgPaths.p368a4c00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p24a74300} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p338e2980} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p3b72780} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p73ccf00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.peaa8a00} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[46.91%_35.78%_47%_45.61%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 425.056 68.2323">
        <g id="Group 4">
          <path d={svgPaths.p3365d880} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p32f21c00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1017cc80} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p20fef800} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.pab4040} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1a516980} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p24453880} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p35512680} fill="var(--fill-0, black)" id="Vector_8" />
          <path d={svgPaths.p15216e00} fill="var(--fill-0, black)" id="Vector_9" />
          <path d={svgPaths.p23621f00} fill="var(--fill-0, black)" id="Vector_10" />
          <path d={svgPaths.p3c561240} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p25107bf0} fill="var(--fill-0, black)" id="Vector_12" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[45.76%_19.53%_45.76%_67.25%]" data-name="Layer 1">
      <div className="absolute inset-[45.76%_19.53%_45.76%_67.25%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[45.76%_19.53%_45.76%_67.25%]">
      <Layer />
    </div>
  );
}

export default function ClientLogos() {
  return (
    <div className="relative size-full" data-name="client logos">
      <div className="absolute bg-[#d9d9d9] h-[1121px] left-0 top-0 w-[2284px]" />
      <Group1 />
      <Group />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}