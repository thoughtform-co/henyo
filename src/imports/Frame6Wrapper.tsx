import briefingImage from 'figma:asset/88167c2f00ce9faddf88a45b5e3da835c418cc8f.png';

export default function Frame6Wrapper() {
  return (
    <div className="relative w-full h-full">
      <img 
        src={briefingImage} 
        alt="Essie Machine Briefing" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
