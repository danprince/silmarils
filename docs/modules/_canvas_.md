[silmarils](../README.md) › [Globals](../globals.md) › ["canvas"](_canvas_.md)

# Module: "canvas"

## Index

### Functions

* [resize](_canvas_.md#resize)
* [resizeToFillScreen](_canvas_.md#resizetofillscreen)

## Functions

###  resize

▸ **resize**(`canvas`: HTMLCanvasElement, `width`: number, `height`: number, `resolution`: number): *number[]*

*Defined in [canvas.js:13](https://github.com/danprince/silmarils/blob/310dab5/canvas.js#L13)*

Resize a canvas for drawing at the appropriate resolution for the
current device. This prevents blurry rendering on retina displays.

This function only needs to be called once, and only after setting
the desired canvas width and height.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`canvas` | HTMLCanvasElement | - |
`width` | number | - |
`height` | number | - |
`resolution` | number | window.devicePixelRatio |

**Returns:** *number[]*

___

###  resizeToFillScreen

▸ **resizeToFillScreen**(`canvas`: HTMLCanvasElement, `resolution`: number): *number[]*

*Defined in [canvas.js:33](https://github.com/danprince/silmarils/blob/310dab5/canvas.js#L33)*

Resize a canvas to fill the screen.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`canvas` | HTMLCanvasElement | - | - |
`resolution` | number | window.devicePixelRatio |   |

**Returns:** *number[]*
