import imgRectangle from "figma:asset/2a8d20e3f1d39e1267a9f4e1bb3e684c627d1686.png";

export default function EssieLogo() {
  return (
    <div className="relative w-auto h-full flex items-center justify-center">
      <img 
        alt="Essie" 
        className="block max-w-full max-h-full object-contain" 
        src={imgRectangle} 
      />
    </div>
  );
}
