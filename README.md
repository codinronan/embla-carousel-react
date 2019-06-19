<br />
<p align="center">
  <a href="https://davidcetinkaya.github.io/embla-carousel" target="_blank"><img width="80" height="80" src="https://rawgit.com/davidcetinkaya/embla-carousel/master/docs/assets/embla-logo.svg" alt="Embla Carousel React">
  </a>
</p>
<strong>
  <h1 align="center">Embla Carousel React</h1>
</strong>
<p align="center">
  A React.js component for Embla Carousel, written in TypeScript.
</p>
<p align="center">
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
  <a href="https://www.npmjs.com/package/embla-carousel-react" target="_blank"><img src="https://img.shields.io/npm/v/embla-carousel-react.svg"></a>
  <a href="https://travis-ci.org/davidcetinkaya/embla-carousel-react" target="_blank"><img src="https://img.shields.io/travis/davidcetinkaya/embla-carousel-react/master.svg"></a>
  <a href="https://prettier.io" target="_blank"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat"></a>
</p>
<p align="center">
  <strong>
    <a href="https://davidcetinkaya.github.io/embla-carousel" target="_blank">« View Demo »</a>
  </strong>
</p>

## Table of contents

- [Demo](#demo)
- [Implementations](#implementations)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [License](#license)

## Demo

> Try it on the [Demo Page](https://davidcetinkaya.github.io/embla-carousel) or [CodeSandbox](https://codesandbox.io/s/embla-carousel-react-znjzv) ✨.

## Implementations

[<img src="https://rawgit.com/davidcetinkaya/embla-carousel/master/docs/assets/javascript-logo.svg" height="60" alt="Embla Carousel JavaScript" />](https://github.com/davidcetinkaya/embla-carousel) &nbsp; &nbsp; [<img src="https://rawgit.com/davidcetinkaya/embla-carousel/master/docs/assets/react-logo.svg" height="60" alt="Embla Carousel React" />](https://github.com/davidcetinkaya/embla-carousel-react)

## Installation

```bash
yarn add embla-carousel-react
```

```javascript
import EmblaCarouselReact from 'embla-carousel-react'
```

## Usage

```javascript
class EmblaCarouselComponent extends Component {
  componentDidMount() {
    this.embla.on('select', () => {
      console.log(`Current index is ${this.embla.selectedIndex()}`)
    })
  }

  next() {
    this.embla.next()
  }

  previous() {
    this.embla.previous()
  }

  render() {
    return (
      <>
        <EmblaCarouselReact
          htmlTagName="div"
          emblaRef={c => (this.embla = c)}
          options={{ loop: false }}
        >
          <div style={{ display: 'flex', willChange: 'transform' }}>
            <div style={{ flex: '0 0 auto', width: '100%' }}>
              Slide 1
            </div>
            <div style={{ flex: '0 0 auto', width: '100%' }}>
              Slide 2
            </div>
            <div style={{ flex: '0 0 auto', width: '100%' }}>
              Slide 3
            </div>
          </div>
        </EmblaCarouselReact>
        <button onClick={() => this.previous()}>Previous</button>
        <button onClick={() => this.next()}>Next</button>
      </>
    )
  }
}
```

## Props

- **`htmlTagName`** - Any valid HTML tag like `div` or `ul` etc.
- **`className`** - Applied to top the top level wrapper.
- **`emblaRed`** - Like a ref function to access the Embla instance in parent component.
- **`options`** - Same [options](https://github.com/davidcetinkaya/embla-carousel#options) as the vanilla JS Embla package.

## License

Embla is [MIT licensed](./LICENSE).  
Copyright © 2019-present, David Cetinkaya.
