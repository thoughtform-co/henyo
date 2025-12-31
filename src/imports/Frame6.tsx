export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#d1c9c7] h-[1350px] left-0 top-0 w-[1080px]" />
      <div className="absolute flex h-[1156px] items-center justify-center left-[78px] top-[108px] w-[924px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-white h-[1156px] rounded-[45px] w-[924px]" />
        </div>
      </div>
      <p className="absolute font-['Founders_Grotesk:Light',sans-serif] h-[657px] leading-[0.9] left-[535px] not-italic text-[80px] text-black text-center top-[519px] translate-x-[-50%] w-[786px]">A glossy gumball-style dispenser filled with sculptural “Essie fruit” objects. One per shade. Each fruit represents its colour story (e.g. a strawberry for Forever Yummy).</p>
      <p className="absolute font-['HEX_Franklin_v0.2_:Condensed_Extrabold',sans-serif] h-[77px] leading-[0.9] left-[540px] not-italic text-[#3e3e3e] text-[96px] text-center top-[296px] translate-x-[-50%] w-[786px]">ESSIE MACHINE</p>
    </div>
  );
}