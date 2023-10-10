import Image from 'next/image'
import React from 'react'

type PropType = {
  selected: boolean
  imgSrc: string
  index?: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <Image
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%' }}
        />
      </button>
    </div>
  )
}
