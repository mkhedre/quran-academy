import { StaticImageData } from 'next/image';
import quranImage from '@/assets/pngtree-muslim-child-reading-quran-with-lantern-decoration-png-image_15036446.png';
import avatar1 from '@/assets/avatar-1.webp';
import avatar2 from '@/assets/avatar-2.webp';
import avatar3 from '@/assets/avatar-3.jpg';
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string | StaticImageData;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: 'hero-quran',
    description: 'A beautiful illustration of the Quran with a modern design',
    imageUrl: quranImage,
    imageHint: 'Quran illustration with modern design',
  },
  {
    id: 'avatar-1',
    description: 'A male avatar with a beard',
    imageUrl: avatar1,
    imageHint: 'Male avatar with beard',
  },
  {
    id: 'avatar-2',
    description: 'A female avatar with a hijab',
    imageUrl: avatar2,
    imageHint: 'Female avatar with hijab',
  },
  {
    id: 'avatar-3',
    description: 'A male avatar with a beard and glasses',
    imageUrl: avatar3,
    imageHint: 'Male avatar with beard and glasses',
  },
];
