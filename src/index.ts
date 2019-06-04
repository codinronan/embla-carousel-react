import EmblaCarousel, { UserOptions } from 'embla-carousel'
import { createElement, ReactNode, useEffect, useRef } from 'react'

type PropType = {
  elementType: string
  children?: ReactNode
  options?: UserOptions
  emblaRef: (embla: EmblaCarousel) => void
}

const canUseDOM = !!(typeof window !== 'undefined' && window.document)

const EmblaCarouselReact = (props: PropType) => {
  const { elementType, emblaRef, options, children } = props
  const carouselRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = carouselRef.current
    if (canUseDOM && node && emblaRef && children) {
      const embla: EmblaCarousel = EmblaCarousel(node, options)
      emblaRef(embla)
      return embla.destroy
    }
  }, [elementType, emblaRef, options, children])

  return createElement(
    elementType,
    {
      ref: carouselRef,
      style: { overflow: 'hidden' },
    },
    children,
  )
}

export default EmblaCarouselReact
export { UserOptions }
