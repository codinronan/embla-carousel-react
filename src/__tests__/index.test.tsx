import React from 'react'
import { mount, configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import EmblaCarouselReact, { UserOptions } from '..'

configure({ adapter: new EnzymeAdapter() })

const options: UserOptions = {
  align: 'center',
  containerSelector: '*',
  slidesToScroll: 1,
  draggable: true,
  dragFree: false,
  loop: false,
  speed: 10,
  startIndex: 0,
  selectedClass: 'is-selected',
  draggableClass: 'is-draggable',
  draggingClass: 'is-dragging',
}

describe('Embla Carousel React', () => {
  test('Consumes all options', () => {
    const embla = mount(
      <EmblaCarouselReact
        options={options}
        htmlTagName="div"
        emblaRef={() => null}
      >
        <div />
      </EmblaCarouselReact>,
    )
    expect(embla.props().options).toEqual(options)
  })

  test('Renders children', () => {
    const embla = mount(
      <EmblaCarouselReact
        options={options}
        htmlTagName="div"
        emblaRef={() => null}
      >
        <ul>
          <li />
          <li />
          <li />
        </ul>
      </EmblaCarouselReact>,
    )
    expect(embla.find('ul').length).toBe(1)
    expect(embla.find('li').length).toBe(3)
  })
})
