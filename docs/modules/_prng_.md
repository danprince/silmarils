[silmarils](../README.md) › [Globals](../globals.md) › ["prng"](_prng_.md)

# Module: "prng"

**`property`** {number} seed

**`property`** {number} state

## Index

### Functions

* [boolean](_prng_.md#boolean)
* [clone](_prng_.md#clone)
* [element](_prng_.md#element)
* [float](_prng_.md#float)
* [generator](_prng_.md#generator)
* [int](_prng_.md#int)
* [item](_prng_.md#item)
* [next](_prng_.md#next)
* [shuffle](_prng_.md#shuffle)
* [shuffled](_prng_.md#shuffled)

## Functions

###  boolean

▸ **boolean**(`rng`: object): *boolean*

*Defined in [prng.js:79](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L79)*

Generate a random boolean.

**Parameters:**

Name | Type |
------ | ------ |
`rng` | object |

**Returns:** *boolean*

___

###  clone

▸ **clone**(`rng`: object): *object*

*Defined in [prng.js:32](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L32)*

Create a copy of an RNG object.

**Parameters:**

Name | Type |
------ | ------ |
`rng` | object |

**Returns:** *object*

___

###  element

▸ **element**(`rng`: object, `array`: T[]): *T*

*Defined in [prng.js:91](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L91)*

Pick a random element from an array.

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`rng` | object |
`array` | T[] |

**Returns:** *T*

___

###  float

▸ **float**(`rng`: object, `min`: number, `max`: number): *number*

*Defined in [prng.js:69](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L69)*

Generate a floating point number between min (inclusive) and max
(exclusive).

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`rng` | object | - |
`min` | number | 0 |
`max` | number | Number.MAX_VALUE |

**Returns:** *number*

___

###  generator

▸ **generator**(`seed`: number): *object*

*Defined in [prng.js:13](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L13)*

Create a new [[RNG]] from a seed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`seed` | number | An integer |

**Returns:** *object*

___

###  int

▸ **int**(`rng`: object, `min`: number, `max`: number): *number*

*Defined in [prng.js:57](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L57)*

Generate an integer between min (inclusive) and max (exclusive).

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`rng` | object | - |
`min` | number | 0 |
`max` | number | Number.MAX_SAFE_INTEGER |

**Returns:** *number*

___

###  item

▸ **item**(`rng`: object, ...`items`: Items): *Items[number]*

*Defined in [prng.js:103](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L103)*

Pick a random argument.

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`rng` | object |
`...items` | Items |

**Returns:** *Items[number]*

___

###  next

▸ **next**(`rng`: object): *number*

*Defined in [prng.js:45](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L45)*

Generate the next number.

**Parameters:**

Name | Type |
------ | ------ |
`rng` | object |

**Returns:** *number*

A float from 0-1.

___

###  shuffle

▸ **shuffle**(`rng`: object, `array`: any[]): *void*

*Defined in [prng.js:114](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L114)*

Shuffle an array in place.

**Parameters:**

Name | Type |
------ | ------ |
`rng` | object |
`array` | any[] |

**Returns:** *void*

___

###  shuffled

▸ **shuffled**(`rng`: object, `array`: Items): *Items*

*Defined in [prng.js:137](https://github.com/danprince/silmarils/blob/310dab5/prng.js#L137)*

Create a shuffled version of an array.

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`rng` | object |
`array` | Items |

**Returns:** *Items*
