import svgPaths from "./svg-l81v6fi2lm";
import imgImage3 from "figma:asset/708a9c032aa41cd6546dbbdae0bc4008447ae7dd.png";
import imgImage2 from "figma:asset/652bef7403c6e4883494a2b9da0da2358b8a0e66.png";

function Group() {
  return (
    <div className="absolute contents left-[2796px] top-[31px]">
      <div className="absolute bg-[#383839] h-[86px] left-[2796px] rounded-[70px] top-[31px] w-[229px]" />
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] leading-[99.452px] left-[2911px] not-italic text-[24px] text-center text-nowrap text-white top-[66px] tracking-[3.6px] translate-x-[-50%]">CONTACT</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[1752px] left-0 top-0 w-[3084px]" data-name="image 1" />
      <div className="absolute h-[363px] left-[610px] top-[1389px] w-[1886px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute bg-white h-[325px] left-[248px] top-[188px] w-[2555px]" />
      <div className="absolute h-[995px] left-[656px] top-[432px] w-[1772px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[274.61%] left-[-85.65%] max-w-none top-[-173.51%] w-[271.48%]" src={imgImage2} />
        </div>
      </div>
      <p className="absolute font-['HEX_Franklin_v0.2_:Condensed_Extrabold',sans-serif] leading-[99.452px] left-[1552.5px] not-italic text-[#888] text-[99.452px] text-center top-[172px] translate-x-[-50%] w-[1965px]">A creative production studio redefining how brands create, direct, and produce in the age of AI.</p>
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] leading-[99.452px] left-[1331px] not-italic text-[24px] text-black text-center text-nowrap top-[59px] tracking-[3.6px] translate-x-[-50%]">OVERVIEW</p>
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] leading-[99.452px] left-[1565.5px] not-italic text-[#888] text-[24px] text-center text-nowrap top-[59px] tracking-[3.6px] translate-x-[-50%]">HOW WE WORK</p>
      <p className="absolute font-['Founders_Grotesk:Medium',sans-serif] leading-[99.452px] left-[1804px] not-italic text-[#888] text-[24px] text-center text-nowrap top-[59px] tracking-[3.6px] translate-x-[-50%]">USE CASES</p>
      <div className="absolute inset-[2.63%_91.47%_95.03%_1.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 41.0883">
          <path d={svgPaths.p5198480} fill="var(--fill-0, #888888)" id="Vector" />
        </svg>
      </div>
      <Group />
      <div className="absolute h-0 left-[1263px] top-[101px] w-[138px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="138" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}