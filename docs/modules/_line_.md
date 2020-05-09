[silmarils](../README.md) › [Globals](../globals.md) › ["line"](_line_.md)

# Module: "line"

**`property`** {number} x1

**`property`** {number} y1

**`property`** {number} x2

**`property`** {number} y2

## Index

### Functions

* [center](_line_.md#center)
* [chebyshev](_line_.md#chebyshev)
* [clone](_line_.md#clone)
* [end](_line_.md#end)
* [equals](_line_.md#equals)
* [from](_line_.md#from)
* [fromPoints](_line_.md#frompoints)
* [length](_line_.md#length)
* [manhattan](_line_.md#manhattan)
* [start](_line_.md#start)
* [translate](_line_.md#translate)
* [translated](_line_.md#translated)

## Functions

###  center

▸ **center**(`line`: object): *object*

*Defined in [line.js:115](https://github.com/danprince/silmarils/blob/310dab5/line.js#L115)*

Get the center point of a line.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |

**Returns:** *object*

___

###  chebyshev

▸ **chebyshev**(`line`: object): *number*

*Defined in [line.js:92](https://github.com/danprince/silmarils/blob/310dab5/line.js#L92)*

Find the Chebyshev distance of the line.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |

**Returns:** *number*

___

###  clone

▸ **clone**(`line`: object): *object*

*Defined in [line.js:44](https://github.com/danprince/silmarils/blob/310dab5/line.js#L44)*

Create a copy of a line.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |

**Returns:** *object*

___

###  end

▸ **end**(`line`: object): *object*

*Defined in [line.js:128](https://github.com/danprince/silmarils/blob/310dab5/line.js#L128)*

Get the end point of a line.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |

**Returns:** *object*

___

###  equals

▸ **equals**(`l1`: object, `l2`: object): *boolean*

*Defined in [line.js:57](https://github.com/danprince/silmarils/blob/310dab5/line.js#L57)*

Check whether two lines are equal.

Lines are considered equal if they have the same start and end points.

**Parameters:**

Name | Type |
------ | ------ |
`l1` | object |
`l2` | object |

**Returns:** *boolean*

___

###  from

▸ **from**(`x1`: number, `y1`: number, `x2`: number, `y2`: number): *object*

*Defined in [line.js:18](https://github.com/danprince/silmarils/blob/310dab5/line.js#L18)*

Construct a line from the coordinates of its start and end.

**Parameters:**

Name | Type |
------ | ------ |
`x1` | number |
`y1` | number |
`x2` | number |
`y2` | number |

**Returns:** *object*

___

###  fromPoints

▸ **fromPoints**(`p1`: object, `p2`: object): *object*

*Defined in [line.js:29](https://github.com/danprince/silmarils/blob/310dab5/line.js#L29)*

Construct a line from its start and end points.

**Parameters:**

Name | Type |
------ | ------ |
`p1` | object |
`p2` | object |

**Returns:** *object*

___

###  length

▸ **length**(`line`: object): *number*

*Defined in [line.js:72](https://github.com/danprince/silmarils/blob/310dab5/line.js#L72)*

Find the length of a line.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |

**Returns:** *number*

___

###  manhattan

▸ **manhattan**(`line`: object): *number*

*Defined in [line.js:82](https://github.com/danprince/silmarils/blob/310dab5/line.js#L82)*

Find the Manhattan distance of the line.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |

**Returns:** *number*

___

###  start

▸ **start**(`line`: object): *object*

*Defined in [line.js:105](https://github.com/danprince/silmarils/blob/310dab5/line.js#L105)*

Get the start point of a line.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |

**Returns:** *object*

___

###  translate

▸ **translate**(`line`: object, `vector`: [number, number]): *void*

*Defined in [line.js:142](https://github.com/danprince/silmarils/blob/310dab5/line.js#L142)*

Translate a line by a vector.

This modifies the line. Use [translated](_line_.md#translated) if you want to create
a new line.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |
`vector` | [number, number] |

**Returns:** *void*

___

###  translated

▸ **translated**(`line`: object, `vector`: [number, number]): *object*

*Defined in [line.js:159](https://github.com/danprince/silmarils/blob/310dab5/line.js#L159)*

Translate a line by a vector.

This creates a new line. Use [translate](_line_.md#translate) if you want to modify
the line instead.

**Parameters:**

Name | Type |
------ | ------ |
`line` | object |
`vector` | [number, number] |

**Returns:** *object*
