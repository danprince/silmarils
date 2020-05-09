[silmarils](../README.md) › [Globals](../globals.md) › ["rectangle"](_rectangle_.md)

# Module: "rectangle"

**`property`** {number} x

**`property`** {number} y

**`property`** {number} width

**`property`** {number} height

## Index

### Functions

* [area](_rectangle_.md#area)
* [bottomLeft](_rectangle_.md#bottomleft)
* [bottomRight](_rectangle_.md#bottomright)
* [center](_rectangle_.md#center)
* [clone](_rectangle_.md#clone)
* [contains](_rectangle_.md#contains)
* [equals](_rectangle_.md#equals)
* [from](_rectangle_.md#from)
* [fromBounds](_rectangle_.md#frombounds)
* [fromPoints](_rectangle_.md#frompoints)
* [intersects](_rectangle_.md#intersects)
* [topLeft](_rectangle_.md#topleft)
* [topRight](_rectangle_.md#topright)
* [translate](_rectangle_.md#translate)
* [translated](_rectangle_.md#translated)

## Functions

###  area

▸ **area**(`rectangle`: object): *number*

*Defined in [rectangle.js:99](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L99)*

Calculate the area of a rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |

**Returns:** *number*

___

###  bottomLeft

▸ **bottomLeft**(`rectangle`: object): *object*

*Defined in [rectangle.js:148](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L148)*

Get the bottom left point of a rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |

**Returns:** *object*

___

###  bottomRight

▸ **bottomRight**(`rectangle`: object): *object*

*Defined in [rectangle.js:161](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L161)*

Get the bottom right point of a rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |

**Returns:** *object*

___

###  center

▸ **center**(`rectangle`: object): *object*

*Defined in [rectangle.js:109](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L109)*

Get the center point of a rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |

**Returns:** *object*

___

###  clone

▸ **clone**(`rectangle`: object): *object*

*Defined in [rectangle.js:67](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L67)*

Create a copy of a rectangle that can be modified separately.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |

**Returns:** *object*

___

###  contains

▸ **contains**(`rectangle`: object, `point`: object): *boolean*

*Defined in [rectangle.js:191](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L191)*

Check whether a rectangle contains a point.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |
`point` | object |

**Returns:** *boolean*

___

###  equals

▸ **equals**(`r1`: object, `r2`: object): *boolean*

*Defined in [rectangle.js:84](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L84)*

Check whether two rectangles are equal. Rectangles are considered
equal if they have the same coordinates and dimensions.

**Parameters:**

Name | Type |
------ | ------ |
`r1` | object |
`r2` | object |

**Returns:** *boolean*

___

###  from

▸ **from**(`x`: number, `y`: number, `width`: number, `height`: number): *object*

*Defined in [rectangle.js:18](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L18)*

Construct a rectangle from x and y coordinates and a width and height.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`width` | number |
`height` | number |

**Returns:** *object*

___

###  fromBounds

▸ **fromBounds**(`x1`: number, `y1`: number, `x2`: number, `y2`: number): *object*

*Defined in [rectangle.js:31](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L31)*

Construct a rectangle from its bounds.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x1` | number | The left coordinate |
`y1` | number | The top coordinate |
`x2` | number | The right coordinate |
`y2` | number | The bottom coordinate |

**Returns:** *object*

___

###  fromPoints

▸ **fromPoints**(`p1`: object, `p2`: object): *object*

*Defined in [rectangle.js:47](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L47)*

Construct a rectangle from two points.

**Parameters:**

Name | Type |
------ | ------ |
`p1` | object |
`p2` | object |

**Returns:** *object*

___

###  intersects

▸ **intersects**(`r1`: object, `r2`: object): *boolean*

*Defined in [rectangle.js:175](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L175)*

Check whether two rectangles intersect.

**Parameters:**

Name | Type |
------ | ------ |
`r1` | object |
`r2` | object |

**Returns:** *boolean*

___

###  topLeft

▸ **topLeft**(`rectangle`: object): *object*

*Defined in [rectangle.js:122](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L122)*

Get the top left point of a rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |

**Returns:** *object*

___

###  topRight

▸ **topRight**(`rectangle`: object): *object*

*Defined in [rectangle.js:135](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L135)*

Get the top right point of a rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |

**Returns:** *object*

___

###  translate

▸ **translate**(`rectangle`: object, `vector`: [number, number]): *void*

*Defined in [rectangle.js:210](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L210)*

Translate a rectangle by a vector.

This modifies the rectangle. Use [translated](_rectangle_.md#translated) if you want to create
a new rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |
`vector` | [number, number] |

**Returns:** *void*

___

###  translated

▸ **translated**(`rectangle`: object, `vector`: [number, number]): *object*

*Defined in [rectangle.js:225](https://github.com/danprince/silmarils/blob/310dab5/rectangle.js#L225)*

Translate a rectangle by a vector.

This creates a new rectangle. Use [translate](_rectangle_.md#translate) if you want to modify
the rectangle instead.

**Parameters:**

Name | Type |
------ | ------ |
`rectangle` | object |
`vector` | [number, number] |

**Returns:** *object*
