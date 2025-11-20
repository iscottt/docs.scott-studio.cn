'use client'

import TextPressure from '@/components/ui/text-pressure'

export default function Hero() {
  return (
    <div className="flex flex-col my-5 w-full box-border">
      <TextPressure
        text="THYUU"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        minFontSize={36}
      />
      <TextPressure
        text="shmm"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        minFontSize={36}
      />
    </div>
  )
}
