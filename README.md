# wechat-miniapp-qrcode

Dynamically generated QR codes for Wechat Miniapps.

**Notice: This library is only compatible with the WeChat mini program framework as it uses the WeChat native APIs.**

If you are looking for the QR code generator for modern browsers, you may refer to [lrsjng/kjua](https://github.com/lrsjng/kjua).

## Requirements

- Mini program base library version >= 2.9.0

## Usage

```html
  <!-- canvas.wxml -->
  <canvas type="2d" id="myCanvas"></canvas>
  <!-- need 2d type -->
  <!-- id but not canvas-id -->
```

```js
// canvas.js
import genQrcode from 'wechat-miniapp-qrcode'

const query = wx.createSelectorQuery()
query.select('#myCanvas')
    .fields({ node: true, size: true })
    .exec((res) => {
        genQrcode(res[0].node, {text: 'Hello'})
    })
```

The available options and their default values are:

```js
{
    // render method: 'canvas' or 'image'
    render: 'canvas',

    // render pixel-perfect lines
    crisp: true,

    // minimum version: 1..40
    // refer to https://kazuhikoarase.github.io/qrcode-generator/js/demo/ for more
    minVersion: 1,

    // error correction level: 'L', 'M', 'Q' or 'H'
    ecLevel: 'L',

    // size in pixel
    size: 200,

    // pixel-ratio, null for wx.getSystemInfoSync().pixelRatio
    ratio: null,

    // code color
    fill: '#333',

    // background color
    back: '#fff',

    // content
    text: 'no text',

    // roundend corners in pc: 0..100
    rounded: 0,

    // quiet zone in modules
    quiet: 0,

    // modes: 'plain', 'label' or 'image'
    mode: 'plain',

    // label/image size and pos in pc: 0..100
    mSize: 30,
    mPosX: 50,
    mPosY: 50,

    // label
    label: 'no label',
    fontname: 'sans',
    fontcolor: '#333',

    // image element
    image: null
}
```

## Credits

- [kazuhikoarase/qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) (MIT)

- [lrsjng/kjua](https://github.com/lrsjng/kjua) (MIT)

## LICENSE

[MIT](https://github.com/fourdim/wechat-miniapp-qrcode/blob/main/LICENSE)

## Trademark

QR Code is a registered trademark of [DENSO WAVE INCORPORATED](http://www.denso-wave.com/en/).
