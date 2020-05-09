[silmarils](../README.md) › [Globals](../globals.md) › ["array-2d"](_array_2d_.md)

# Module: "array-2d"

**`template`** 

**`property`** {number} width

**`property`** {number} height

**`property`** {T[]} data

## Index

### Functions

* [clone](_array_2d_.md#clone)
* [create](_array_2d_.md#create)
* [equals](_array_2d_.md#equals)
* [fill](_array_2d_.md#fill)
* [filled](_array_2d_.md#filled)
* [from2DArray](_array_2d_.md#from2darray)
* [fromArray](_array_2d_.md#fromarray)
* [get](_array_2d_.md#get)
* [map](_array_2d_.md#map)
* [set](_array_2d_.md#set)
* [slice](_array_2d_.md#slice)
* [to2DArray](_array_2d_.md#to2darray)
* [toArray](_array_2d_.md#toarray)

## Functions

###  clone

▸ **clone**(`array2D`: object): *object*

*Defined in [array-2d.js:28](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L28)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array2D` | object |

**Returns:** *object*

___

###  create

▸ **create**(`width`: number, `height`: number): *object*

*Defined in [array-2d.js:15](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L15)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |

**Returns:** *object*

___

###  equals

▸ **equals**(`a1`: object, `a2`: object): *boolean*

*Defined in [array-2d.js:102](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`a1` | object |
`a2` | object |

**Returns:** *boolean*

___

###  fill

▸ **fill**(`array2D`: object, `item`: T, `startX`: number, `startY`: number, `endX`: number, `endY`: number): *void*

*Defined in [array-2d.js:155](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L155)*

**`template`** 

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`array2D` | object | - |
`item` | T | - |
`startX` | number | 0 |
`startY` | number | 0 |
`endX` | number | array2D.width |
`endY` | number | array2D.height |

**Returns:** *void*

___

###  filled

▸ **filled**(`array2D`: object, `item`: T, `startX`: number, `startY`: number, `endX`: number, `endY`: number): *object*

*Defined in [array-2d.js:180](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L180)*

**`template`** 

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`array2D` | object | - |
`item` | T | - |
`startX` | number | 0 |
`startY` | number | 0 |
`endX` | number | array2D.width |
`endY` | number | array2D.height |

**Returns:** *object*

___

###  from2DArray

▸ **from2DArray**(`array`: T[][]): *object*

*Defined in [array-2d.js:65](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L65)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array` | T[][] |

**Returns:** *object*

___

###  fromArray

▸ **fromArray**(`width`: number, `height`: number, `array`: T[]): *object*

*Defined in [array-2d.js:43](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L43)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`width` | number |
`height` | number |
`array` | T[] |

**Returns:** *object*

___

###  get

▸ **get**(`array2D`: object, `x`: number, `y`: number): *T*

*Defined in [array-2d.js:123](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L123)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array2D` | object |
`x` | number |
`y` | number |

**Returns:** *T*

___

###  map

▸ **map**(`array2D`: object, `callback`: function): *object*

*Defined in [array-2d.js:229](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L229)*

**`template`** 

**`template`** 

**Parameters:**

▪ **array2D**: *object*

▪ **callback**: *function*

▸ (`item`: T, `x`: number, `y`: number): *U*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |
`x` | number |
`y` | number |

**Returns:** *object*

___

###  set

▸ **set**(`array2D`: object, `x`: number, `y`: number, `value`: T): *void*

*Defined in [array-2d.js:138](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L138)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array2D` | object |
`x` | number |
`y` | number |
`value` | T |

**Returns:** *void*

___

###  slice

▸ **slice**(`array2D`: object, `x`: number, `y`: number, `width`: number, `height`: number): *object*

*Defined in [array-2d.js:208](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L208)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array2D` | object |
`x` | number |
`y` | number |
`width` | number |
`height` | number |

**Returns:** *object*

___

###  to2DArray

▸ **to2DArray**(`array2D`: object): *T[][]*

*Defined in [array-2d.js:84](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L84)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array2D` | object |

**Returns:** *T[][]*

___

###  toArray

▸ **toArray**(`array2d`: object): *T[]*

*Defined in [array-2d.js:56](https://github.com/danprince/silmarils/blob/310dab5/array-2d.js#L56)*

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array2d` | object |

**Returns:** *T[]*
