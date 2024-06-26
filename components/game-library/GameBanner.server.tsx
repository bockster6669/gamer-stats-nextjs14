import React from 'react';
import Image from 'next/image';
import Button from '../shared/Button.client';

export default function GameBanner() {
  return (
    <div className="relative box-border flex h-[480px] flex-col justify-between p-10">
      <Image
        src="/images/banners/forza-banner3.png"
        alt="Game Banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        quality={100}
      />

      <div
        className={`flex-center relative self-end rounded-full bg-black/35 p-2`}
      >
        <Image
          alt="like this game"
          src="/icons/heart.svg"
          width={29}
          height={29}
        />
      </div>
      <div className="relative flex justify-between">
        <div className=" flex flex-col gap-4">
          <h1 className=" text-4xl font-[700]">Forza Horizon 5</h1>
          <Button label="View Stats" imgUrl="/icons/box.svg" />
        </div>

        <div className=" flex gap-9 self-end">
          <Stat about="playtime" />
          <Stat about="achievements" />
          <Stat about="friends" />
        </div>
      </div>
    </div>
  );
}

type StatType = 'playtime' | 'achievements' | 'friends';

interface StatConfig {
  imageSrc: string;
  label: string;
  description: string;
}

const imageSrcMap: Record<StatType, StatConfig> = {
  playtime: {
    imageSrc: '/icons/clock.svg',
    label: 'PlayTime',
    description: '32.5 Hours',
  },
  achievements: {
    imageSrc: '/icons/medal.svg',
    label: 'Achivments',
    description: '13/54',
  },
  friends: {
    imageSrc: '/icons/friends.svg',
    label: 'Friends',
    description: '2 Online',
  },
};

interface StatProps {
  about: StatType;
}

function Stat({ about }: StatProps) {
  const { imageSrc, label, description } = imageSrcMap[about];

  return (
    <div className="flex gap-4">
      <Image alt={label} src={imageSrc} width={32} height={32} />
      <div className="flex flex-col gap-1">
        <p className=" m-0 p-0">{label}</p>
        <p className=" m-0 p-0">{description}</p>
      </div>
    </div>
  );
}
