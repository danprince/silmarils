[silmarils](../README.md) › [Globals](../globals.md) › ["rng"](_rng_.md)

# Module: "rng"

## Index

### Variables

* [gen](_rng_.md#let-gen)

### Functions

* [boolean](_rng_.md#boolean)
* [element](_rng_.md#element)
* [float](_rng_.md#float)
* [int](_rng_.md#int)
* [item](_rng_.md#item)
* [next](_rng_.md#next)
* [seed](_rng_.md#seed)
* [shuffle](_rng_.md#shuffle)
* [shuffled](_rng_.md#shuffled)

## Variables

### `Let` gen

• **gen**: *object* = PRNG.generator(
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
)

*Defined in [rng.js:7](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L7)*

The generator that this module uses internally. It can be re-seeded
with the [seed](_rng_.md#seed) function.

#### Type declaration:

## Functions

###  boolean

▸ **boolean**(): *boolean*

*Defined in [rng.js:57](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L57)*

Produce a boolean using [[PRNG.boolean]].

**Returns:** *boolean*

___

###  element

▸ **element**(`array`: T[]): *T*

*Defined in [rng.js:68](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L68)*

Pick a random element from an array using [[PRNG.element]].

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array` | T[] |

**Returns:** *T*

___

###  float

▸ **float**(`min`: number, `max`: number): *number*

*Defined in [rng.js:48](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L48)*

Produce a float in a range using [[PRNG.float]].

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`min` | number | 0 |
`max` | number | Number.MAX_VALUE |

**Returns:** *number*

___

###  int

▸ **int**(`min`: number, `max`: number): *number*

*Defined in [rng.js:37](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L37)*

Produce an integer in a range using [[PRNG.int]].

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`min` | number | 0 |
`max` | number | Number.MAX_SAFE_INTEGER |

**Returns:** *number*

___

###  item

▸ **item**(...`items`: Items): *Items[number]*

*Defined in [rng.js:79](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L79)*

Pick a random argument using [[PRNG.item]].

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`...items` | Items |

**Returns:** *Items[number]*

___

###  next

▸ **next**(): *number*

*Defined in [rng.js:26](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L26)*

Produce an integer using [[PRNG.next]].

**Returns:** *number*

___

###  seed

▸ **seed**(`seed`: number): *void*

*Defined in [rng.js:17](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L17)*

Set the seed for the internal random number generator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`seed` | number | An integer seed |

**Returns:** *void*

___

###  shuffle

▸ **shuffle**(`array`: any[]): *void*

*Defined in [rng.js:91](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L91)*

Shuffle an array in-place using [[PRNG.shuffle]].

If you want to create a new array, use [[RNG.shuffled]].

**Parameters:**

Name | Type |
------ | ------ |
`array` | any[] |

**Returns:** *void*

___

###  shuffled

▸ **shuffled**(`array`: Items): *Items*

*Defined in [rng.js:104](https://github.com/danprince/silmarils/blob/310dab5/rng.js#L104)*

Create a shuffled version of an array using [[PRNG.shuffled]].

If you want to modify the array in place, use [[RNG.shuffle]].

**`template`** 

**Parameters:**

Name | Type |
------ | ------ |
`array` | Items |

**Returns:** *Items*
