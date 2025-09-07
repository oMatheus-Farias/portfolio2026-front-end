import Image from 'next/image';
import mePicture from '../assets/mePicture.jpg';

export function MePicture() {
  return (
    <div className="relative h-[120px] w-[120px] lg:h-[184px] lg:w-[184px]">
      <Image src={mePicture} sizes={`120px`} alt="Avatar" fill priority className="rounded-3xl object-contain" />
    </div>
  );
}
