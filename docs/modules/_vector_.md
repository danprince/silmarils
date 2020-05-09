[silmarils](../README.md) › [Globals](../globals.md) › ["vector"](_vector_.md)

# Module: "vector"

Vector represents a direction and a magnitude.

## Index

### Functions

* [add](_vector_.md#add)
* [chebyshev](_vector_.md#chebyshev)
* [clone](_vector_.md#clone)
* [divide](_vector_.md#divide)
* [dot](_vector_.md#dot)
* [equals](_vector_.md#equals)
* [from](_vector_.md#from)
* [fromAngle](_vector_.md#fromangle)
* [fromPoints](_vector_.md#frompoints)
* [length](_vector_.md#length)
* [manhattan](_vector_.md#manhattan)
* [multiply](_vector_.md#multiply)
* [normalize](_vector_.md#normalize)
* [normalized](_vector_.md#normalized)
* [rotate](_vector_.md#rotate)
* [rotated](_vector_.md#rotated)
* [scale](_vector_.md#scale)
* [scaled](_vector_.md#scaled)
* [subtract](_vector_.md#subtract)

## Functions

###  add

▸ **add**(`v1`: [number, number], `v2`: [number, number]): *[number, number]*

*Defined in [vector.js:119](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L119)*

Adds two vectors.

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [number, number] |
`v2` | [number, number] |

**Returns:** *[number, number]*

___

###  chebyshev

▸ **chebyshev**(`vector`: [number, number]): *number*

*Defined in [vector.js:94](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L94)*

Find the Chebyshev distance of the vector.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *number*

___

###  clone

▸ **clone**(`vector`: [number, number]): *[number, number]*

*Defined in [vector.js:52](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L52)*

Create a copy of a vector that can be modified separately.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *[number, number]*

___

###  divide

▸ **divide**(`v1`: [number, number], `v2`: [number, number]): *[number, number]*

*Defined in [vector.js:161](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L161)*

Divides two vectors.

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [number, number] |
`v2` | [number, number] |

**Returns:** *[number, number]*

___

###  dot

▸ **dot**(`v1`: [number, number], `v2`: [number, number]): *number*

*Defined in [vector.js:108](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L108)*

Calculate the dot product of two vectors.

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [number, number] |
`v2` | [number, number] |

**Returns:** *number*

___

###  equals

▸ **equals**(`v1`: [number, number], `v2`: [number, number]): *boolean*

*Defined in [vector.js:64](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L64)*

Check whether two vectors are equal. Vectors are equal if both of
their components are the same.

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [number, number] |
`v2` | [number, number] |

**Returns:** *boolean*

___

###  from

▸ **from**(`x`: number, `y`: number): *[number, number]*

*Defined in [vector.js:14](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L14)*

Create a vector from X and Y components.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[number, number]*

___

###  fromAngle

▸ **fromAngle**(`radians`: number, `length`: number): *[number, number]*

*Defined in [vector.js:39](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L39)*

Create a vector from an angle and a length.

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |
`length` | number |

**Returns:** *[number, number]*

___

###  fromPoints

▸ **fromPoints**(`start`: object, `end`: object): *[number, number]*

*Defined in [vector.js:25](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L25)*

Create a vector from start and end points.

**Parameters:**

Name | Type |
------ | ------ |
`start` | object |
`end` | object |

**Returns:** *[number, number]*

___

###  length

▸ **length**(`vector`: [number, number]): *number*

*Defined in [vector.js:74](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L74)*

Calculate the magnitude of a vector.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *number*

___

###  manhattan

▸ **manhattan**(`vector`: [number, number]): *number*

*Defined in [vector.js:84](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L84)*

Find the Manhattan distance of the vector.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *number*

___

###  multiply

▸ **multiply**(`v1`: [number, number], `v2`: [number, number]): *[number, number]*

*Defined in [vector.js:147](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L147)*

Multiplies two vectors.

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [number, number] |
`v2` | [number, number] |

**Returns:** *[number, number]*

___

###  normalize

▸ **normalize**(`vector`: [number, number]): *void*

*Defined in [vector.js:177](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L177)*

Normalize a vector to have a length of 1.

This function modifies the vector. Use [normalized](_vector_.md#normalized) if you want to
produce a new vector.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *void*

___

###  normalized

▸ **normalized**(`vector`: [number, number]): *[number, number]*

*Defined in [vector.js:192](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L192)*

Construct a new normalized vector.

This function produces a new vector. Use [normalize](_vector_.md#normalize) if you want to
modify the vector in place.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *[number, number]*

___

###  rotate

▸ **rotate**(`vector`: [number, number], `radians`: number): *void*

*Defined in [vector.js:211](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L211)*

Rotate a vector.

This function modifies the vector. Use [rotated](_vector_.md#rotated) if you want to
produce a new vector.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |
`radians` | number |

**Returns:** *void*

___

###  rotated

▸ **rotated**(`vector`: [number, number], `radians`: number): *[number, number]*

*Defined in [vector.js:228](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L228)*

Construct a new rotated vector.

This function produces a new vector. Use [rotate](_vector_.md#rotate) if you want to
modify the vector in place.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |
`radians` | number |

**Returns:** *[number, number]*

___

###  scale

▸ **scale**(`vector`: [number, number], `scale`: number): *void*

*Defined in [vector.js:248](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L248)*

Scale a vector.

This function modifies the vector. Use [scaled](_vector_.md#scaled) if you want to
produce a new vector.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |
`scale` | number |

**Returns:** *void*

___

###  scaled

▸ **scaled**(`vector`: [number, number], `scale`: number): *[number, number]*

*Defined in [vector.js:263](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L263)*

Construct a new scaled vector.

This function produces a new vector. Use [scale](_vector_.md#scale) if you want to
modify the vector in place.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |
`scale` | number |

**Returns:** *[number, number]*

___

###  subtract

▸ **subtract**(`v1`: [number, number], `v2`: [number, number]): *[number, number]*

*Defined in [vector.js:133](https://github.com/danprince/silmarils/blob/310dab5/vector.js#L133)*

Subtracts two vectors.

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [number, number] |
`v2` | [number, number] |

**Returns:** *[number, number]*
