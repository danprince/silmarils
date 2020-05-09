[silmarils](../README.md) › [Globals](../globals.md) › ["point"](_point_.md)

# Module: "point"

Point represents a position in 2d space and is defined by its X and
Y coordinates.

**`property`** {number} x

**`property`** {number} y

## Index

### Variables

* [ORIGIN](_point_.md#const-origin)

### Functions

* [chebyshev](_point_.md#chebyshev)
* [clone](_point_.md#clone)
* [distance](_point_.md#distance)
* [equals](_point_.md#equals)
* [from](_point_.md#from)
* [interpolate](_point_.md#interpolate)
* [manhattan](_point_.md#manhattan)
* [translate](_point_.md#translate)
* [translated](_point_.md#translated)

## Variables

### `Const` ORIGIN

• **ORIGIN**: *object* = Object.freeze({ x: 0, y: 0 })

*Defined in [point.js:13](https://github.com/danprince/silmarils/blob/310dab5/point.js#L13)*

The origin is the point at 0, 0. It cannot be modified.

#### Type declaration:

## Functions

###  chebyshev

▸ **chebyshev**(`p1`: object, `p2`: object): *number*

*Defined in [point.js:80](https://github.com/danprince/silmarils/blob/310dab5/point.js#L80)*

Calculate the Chebyshev distance between two points.

**Parameters:**

Name | Type |
------ | ------ |
`p1` | object |
`p2` | object |

**Returns:** *number*

___

###  clone

▸ **clone**(`point`: object): *object*

*Defined in [point.js:32](https://github.com/danprince/silmarils/blob/310dab5/point.js#L32)*

Create a copy of a point that can be modified separately.

**Parameters:**

Name | Type |
------ | ------ |
`point` | object |

**Returns:** *object*

___

###  distance

▸ **distance**(`p1`: object, `p2`: object): *number*

*Defined in [point.js:58](https://github.com/danprince/silmarils/blob/310dab5/point.js#L58)*

Calculate the Euclidean distance between two points.

**Parameters:**

Name | Type |
------ | ------ |
`p1` | object |
`p2` | object |

**Returns:** *number*

___

###  equals

▸ **equals**(`p1`: object, `p2`: object): *boolean*

*Defined in [point.js:44](https://github.com/danprince/silmarils/blob/310dab5/point.js#L44)*

Check whether two points are equal. Points are considered equal if
their X and Y coordinates are both equal.

**Parameters:**

Name | Type |
------ | ------ |
`p1` | object |
`p2` | object |

**Returns:** *boolean*

___

###  from

▸ **from**(`x`: number, `y`: number): *object*

*Defined in [point.js:22](https://github.com/danprince/silmarils/blob/310dab5/point.js#L22)*

Construct a point from its X and Y coordinates.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *object*

___

###  interpolate

▸ **interpolate**(`p1`: object, `p2`: object, `value`: number): *object*

*Defined in [point.js:123](https://github.com/danprince/silmarils/blob/310dab5/point.js#L123)*

Interpolate a new point between on the line between two points.

**Parameters:**

Name | Type |
------ | ------ |
`p1` | object |
`p2` | object |
`value` | number |

**Returns:** *object*

___

###  manhattan

▸ **manhattan**(`p1`: object, `p2`: object): *number*

*Defined in [point.js:69](https://github.com/danprince/silmarils/blob/310dab5/point.js#L69)*

Calculate the Manhattan distance between two points.

**Parameters:**

Name | Type |
------ | ------ |
`p1` | object |
`p2` | object |

**Returns:** *number*

___

###  translate

▸ **translate**(`point`: object, `vector`: [number, number]): *void*

*Defined in [point.js:93](https://github.com/danprince/silmarils/blob/310dab5/point.js#L93)*

Translate a point by a vector.

This modifies the point. Use [translated](_point_.md#translated) to create a new point.

**Parameters:**

Name | Type |
------ | ------ |
`point` | object |
`vector` | [number, number] |

**Returns:** *void*

___

###  translated

▸ **translated**(`point`: object, `vector`: [number, number]): *object*

*Defined in [point.js:108](https://github.com/danprince/silmarils/blob/310dab5/point.js#L108)*

Translate a point by a vector.

This creates a new point. Use [translate](_point_.md#translate) if you want to modify
the point instead.

**Parameters:**

Name | Type |
------ | ------ |
`point` | object |
`vector` | [number, number] |

**Returns:** *object*
