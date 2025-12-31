import type { ComponentType } from 'react';
import EssieLogo from '@/components/logos/EssieLogo';
import KomonoLogo from '@/components/logos/KomonoLogo';
import UnderArmourLogo from '@/components/logos/UnderArmourLogo';
import LoopEarplugsLogo from '@/components/logos/LoopEarplugsLogo';

export interface MediaItem {
  type: 'video' | 'image';
  id: string;
  aspectRatio: string;
}

export interface UseCase {
  vimeoId: string;
  logo: ComponentType;
  title: string;
  description: string;
  workType: string;
  fallbackImage: string;
  fullDescription: string;
  services: string[];
  media: MediaItem[];
}

export const useCases: UseCase[] = [
  {
    vimeoId: '1150575297',
    logo: EssieLogo,
    title: 'ESSIE · SOCIAL & PRODUCT CONTENT',
    description: 'High-volume beauty assets with consistent polish',
    workType: 'Always-on Content',
    fallbackImage:
      'https://images.unsplash.com/photo-1661267571820-eb5c6bd6634f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBuYWlsJTIwcG9saXNofGVufDF8fHx8MTc2NzE0MzM2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription:
      "Henyo Digital delivered a high-volume content system for Essie, producing polished social and product assets at scale. The production pipeline balanced speed with premium quality, ensuring every asset maintained the brand's signature beauty aesthetic.",
    services: ['AI Hybrid Production', 'Product Visualization', 'Social Content'],
    media: [
      { type: 'video', id: '1150575297', aspectRatio: '4:5' },
      { type: 'video', id: '1150575297', aspectRatio: '4:5' },
      { type: 'video', id: '1150575297', aspectRatio: '4:5' },
    ],
  },
  {
    vimeoId: '1135858265',
    logo: KomonoLogo,
    title: 'LOOP EARPLUGS · CREATIVE HUB',
    description: 'Always-on hybrid production system for global campaigns',
    workType: 'Digital Campaign',
    fallbackImage:
      'https://images.unsplash.com/photo-1650167214003-ec877a56d03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlYXJwaG9uZXMlMjBtaW5pbWFsfGVufDF8fHx8MTc2NzE0MzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription:
      'Henyo Digital built an always-on creative hub for Loop Earplugs, enabling rapid global campaign deployment. The system combines AI workflows with traditional production to maintain brand consistency while scaling output across markets.',
    services: ['Creative Hub', 'AI Hybrid Production', 'Campaign Systems'],
    media: [
      { type: 'video', id: '1135858265', aspectRatio: '16:9' },
      { type: 'video', id: '1135858265', aspectRatio: '16:9' },
    ],
  },
  {
    vimeoId: '1149581375',
    logo: UnderArmourLogo,
    title: 'UNDER ARMOUR · FOREVER MADE NOW',
    description: 'Performance-led visuals built for global rollout',
    workType: 'Digital Campaign',
    fallbackImage:
      'https://images.unsplash.com/photo-1760114852799-159fe9dccfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0cmFpbmluZyUyMGF0aGxldGljfGVufDF8fHx8MTc2NzE0MzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription:
      "Henyo Digital was responsible for the art direction and technical execution of Wes Walker's innovative film for Under Armour featuring Anthony Joshua. The campaign integrates generative AI with advanced VFX in a mixed-media format, marking one of the first AI-powered sports commercials.",
    services: ['AI Hybrid Production', 'Art Direction', 'Technical Direction'],
    media: [
      { type: 'video', id: '1149581375', aspectRatio: '16:9' },
      { type: 'video', id: '1149581375', aspectRatio: '16:9' },
      { type: 'video', id: '1149581375', aspectRatio: '16:9' },
    ],
  },
  {
    vimeoId: '1132109785',
    logo: KomonoLogo,
    title: 'LOOP EARPLUGS · ATL HERO FILM',
    description: '30s hero film and cutdowns delivered in sprint format',
    workType: 'Digital Campaign',
    fallbackImage:
      'https://images.unsplash.com/photo-1650167214003-ec877a56d03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlYXJwaG9uZXMlMjBtaW5pbWFsfGVufDF8fHx8MTc2NzE0MzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription:
      'Henyo Digital produced a 30-second hero film and platform-specific cutdowns for Loop Earplugs in a focused sprint format. The project demonstrated rapid turnaround without compromising creative quality or brand integrity.',
    services: ['Film Production', 'Editing & Post', 'Sprint Delivery'],
    media: [
      { type: 'video', id: '1132109785', aspectRatio: '16:9' },
      { type: 'video', id: '1132109785', aspectRatio: '16:9' },
    ],
  },
  {
    vimeoId: '1150581300',
    logo: LoopEarplugsLogo,
    title: 'KOMONO · NOOR CAMPAIGN',
    description: 'Hybrid CGI and AI-driven fashion storytelling',
    workType: 'Digital Campaign',
    fallbackImage:
      'https://images.unsplash.com/photo-1569444743503-f11ed614445b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbWluaW1hbHxlbnwxfHx8fDE3NjcxNDMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    fullDescription:
      'Henyo Digital crafted a hybrid fashion campaign for Komono, blending CGI environments with AI-enhanced storytelling. The project showcases the intersection of technical innovation and fashion aesthetics.',
    services: ['CGI Production', 'AI Enhancement', 'Fashion Content'],
    media: [
      { type: 'video', id: '1150581300', aspectRatio: '9:16' },
      { type: 'video', id: '1150581300', aspectRatio: '9:16' },
      { type: 'video', id: '1135858060', aspectRatio: '9:16' },
    ],
  },
];

