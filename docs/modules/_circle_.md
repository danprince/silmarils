[silmarils](../README.md) › [Globals](../globals.md) › ["circle"](_circle_.md)

# Module: "circle"

**`property`** {number} x

**`property`** {number} y

**`property`** {number} radius

## Index

### Functions

* [area](_circle_.md#area)
* [center](_circle_.md#center)
* [clone](_circle_.md#clone)
* [contains](_circle_.md#contains)
* [diameter](_circle_.md#diameter)
* [equals](_circle_.md#equals)
* [from](_circle_.md#from)
* [intersects](_circle_.md#intersects)
* [translate](_circle_.md#translate)
* [translated](_circle_.md#translated)

## Functions

###  area

▸ **area**(`circle`: object): *number*

*Defined in [circle.js:69](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L69)*

Calculate the area of the circle.

**Parameters:**

Name | Type |
------ | ------ |
`circle` | object |

**Returns:** *number*

___

###  center

▸ **center**(`circle`: object): *object*

*Defined in [circle.js:79](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L79)*

Get the point at the center of the circle.

**Parameters:**

Name | Type |
------ | ------ |
`circle` | object |

**Returns:** *object*

___

###  clone

▸ **clone**(`circle`: object): *object*

*Defined in [circle.js:27](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L27)*

Create a copy of a circle that can be modified separately.

**Parameters:**

Name | Type |
------ | ------ |
`circle` | object |

**Returns:** *object*

___

###  contains

▸ **contains**(`circle`: object, `point`: object): *boolean*

*Defined in [circle.js:102](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L102)*

Check whether a circle contains a point.

**Parameters:**

Name | Type |
------ | ------ |
`circle` | object |
`point` | object |

**Returns:** *boolean*

___

###  diameter

▸ **diameter**(`circle`: object): *number*

*Defined in [circle.js:59](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L59)*

Calculate the diameter of the circle.

**Parameters:**

Name | Type |
------ | ------ |
`circle` | object |

**Returns:** *number*

___

###  equals

▸ **equals**(`c1`: object, `c2`: object): *boolean*

*Defined in [circle.js:45](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L45)*

Check whether two circles are equal.

Circles are considered equal if their center coordinates and radii
are the same.

**Parameters:**

Name | Type |
------ | ------ |
`c1` | object |
`c2` | object |

**Returns:** *boolean*

___

###  from

▸ **from**(`x`: number, `y`: number, `radius`: number): *object*

*Defined in [circle.js:17](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L17)*

Construct a circle from the X and Y coordinates of its center and
it's radius.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`radius` | number |

**Returns:** *object*

___

###  intersects

▸ **intersects**(`c1`: object, `c2`: object): *boolean*

*Defined in [circle.js:90](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L90)*

Check whether two circles intersect.

**Parameters:**

Name | Type |
------ | ------ |
`c1` | object |
`c2` | object |

**Returns:** *boolean*

___

###  translate

▸ **translate**(`circle`: object, `vector`: [number, number]): *void*

*Defined in [circle.js:116](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L116)*

Translate a circle by a vector.

This modifies the circle. Use [translated](_circle_.md#translated) if you want to create
a new circle.

**Parameters:**

Name | Type |
------ | ------ |
`circle` | object |
`vector` | [number, number] |

**Returns:** *void*

___

###  translated

▸ **translated**(`circle`: object, `vector`: [number, number]): *object*

*Defined in [circle.js:131](https://github.com/danprince/silmarils/blob/310dab5/circle.js#L131)*

Translate a circle by a vector.

This creates a new circle. Use [translate](_circle_.md#translate) if you want to modify
the circle instead.

**Parameters:**

Name | Type |
------ | ------ |
`circle` | object |
`vector` | [number, number] |

**Returns:** *object*
