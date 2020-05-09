[silmarils](../README.md) › [Globals](../globals.md) › ["direction"](_direction_.md)

# Module: "direction"

## Index

### Variables

* [EAST](_direction_.md#const-east)
* [NORTH](_direction_.md#const-north)
* [NORTH_EAST](_direction_.md#const-north_east)
* [NORTH_WEST](_direction_.md#const-north_west)
* [SOUTH](_direction_.md#const-south)
* [SOUTH_EAST](_direction_.md#const-south_east)
* [SOUTH_WEST](_direction_.md#const-south_west)
* [WEST](_direction_.md#const-west)

### Functions

* [cardinalFromAngle](_direction_.md#cardinalfromangle)
* [cardinalFromVector](_direction_.md#cardinalfromvector)
* [fromAngle](_direction_.md#fromangle)
* [fromVector](_direction_.md#fromvector)
* [rotate180](_direction_.md#rotate180)
* [rotateLeft45](_direction_.md#rotateleft45)
* [rotateLeft90](_direction_.md#rotateleft90)
* [rotateRight45](_direction_.md#rotateright45)
* [rotateRight90](_direction_.md#rotateright90)
* [toAngle](_direction_.md#toangle)
* [toVector](_direction_.md#tovector)

## Variables

### `Const` EAST

• **EAST**: *"east"* = "east"

*Defined in [direction.js:23](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L23)*

___

### `Const` NORTH

• **NORTH**: *"north"* = "north"

*Defined in [direction.js:22](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L22)*

___

### `Const` NORTH_EAST

• **NORTH_EAST**: *"north-east"* = "north-east"

*Defined in [direction.js:28](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L28)*

___

### `Const` NORTH_WEST

• **NORTH_WEST**: *"north-west"* = "north-west"

*Defined in [direction.js:29](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L29)*

___

### `Const` SOUTH

• **SOUTH**: *"south"* = "south"

*Defined in [direction.js:24](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L24)*

___

### `Const` SOUTH_EAST

• **SOUTH_EAST**: *"south-east"* = "south-east"

*Defined in [direction.js:30](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L30)*

___

### `Const` SOUTH_WEST

• **SOUTH_WEST**: *"south-west"* = "south-west"

*Defined in [direction.js:31](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L31)*

___

### `Const` WEST

• **WEST**: *"west"* = "west"

*Defined in [direction.js:25](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L25)*

## Functions

###  cardinalFromAngle

▸ **cardinalFromAngle**(`radians`: number): *"north" | "east" | "south" | "west"*

*Defined in [direction.js:62](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L62)*

Find the approximate cardinal direction from an angle in radians.

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *"north" | "east" | "south" | "west"*

___

###  cardinalFromVector

▸ **cardinalFromVector**(`vector`: [number, number]): *"north" | "east" | "south" | "west"*

*Defined in [direction.js:123](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L123)*

Create a cardinal direction from a vector.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *"north" | "east" | "south" | "west"*

___

###  fromAngle

▸ **fromAngle**(`radians`: number): *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

*Defined in [direction.js:39](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L39)*

Find the approximate direction from an angle in radians.

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

___

###  fromVector

▸ **fromVector**(`vector`: [number, number]): *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

*Defined in [direction.js:148](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L148)*

Create a direction from a vector.

**Parameters:**

Name | Type |
------ | ------ |
`vector` | [number, number] |

**Returns:** *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

___

###  rotate180

▸ **rotate180**(`direction`: "north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"): *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

*Defined in [direction.js:263](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L263)*

Rotate a direction by 180 degrees.

TODO: Fix types so that if a CardinalDirection goes in, a
CardinalDirection is returned and the same for IntercardinalDirection.

**Parameters:**

Name | Type |
------ | ------ |
`direction` | "north" &#124; "east" &#124; "south" &#124; "west" &#124; "north-east" &#124; "north-west" &#124; "south-east" &#124; "south-west" |

**Returns:** *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

___

###  rotateLeft45

▸ **rotateLeft45**(`direction`: "north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"): *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

*Defined in [direction.js:197](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L197)*

Rotate a direction by 45 degrees in a counterclockwise direction.

TODO: Fix types so that if a CardinalDirection goes in, an
IntercardinalDirection is returned and vice versa.

**Parameters:**

Name | Type |
------ | ------ |
`direction` | "north" &#124; "east" &#124; "south" &#124; "west" &#124; "north-east" &#124; "north-west" &#124; "south-east" &#124; "south-west" |

**Returns:** *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

___

###  rotateLeft90

▸ **rotateLeft90**(`direction`: "north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"): *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

*Defined in [direction.js:241](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L241)*

Rotate a direction by 90 degrees in a counterclockwise direction.

TODO: Fix types so that if a CardinalDirection goes in, a
CardinalDirection is returned and the same for IntercardinalDirection.

**Parameters:**

Name | Type |
------ | ------ |
`direction` | "north" &#124; "east" &#124; "south" &#124; "west" &#124; "north-east" &#124; "north-west" &#124; "south-east" &#124; "south-west" |

**Returns:** *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

___

###  rotateRight45

▸ **rotateRight45**(`direction`: "north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"): *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

*Defined in [direction.js:175](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L175)*

Rotate a direction by 45 degrees in a clockwise direction.

TODO: Fix types so that if a CardinalDirection goes in, an
IntercardinalDirection is returned and vice versa.

**Parameters:**

Name | Type |
------ | ------ |
`direction` | "north" &#124; "east" &#124; "south" &#124; "west" &#124; "north-east" &#124; "north-west" &#124; "south-east" &#124; "south-west" |

**Returns:** *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

___

###  rotateRight90

▸ **rotateRight90**(`direction`: "north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"): *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

*Defined in [direction.js:219](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L219)*

Rotate a direction by 90 degrees in a clockwise direction.

TODO: Fix types so that if a CardinalDirection goes in, a
CardinalDirection is returned and the same for IntercardinalDirection.

**Parameters:**

Name | Type |
------ | ------ |
`direction` | "north" &#124; "east" &#124; "south" &#124; "west" &#124; "north-east" &#124; "north-west" &#124; "south-east" &#124; "south-west" |

**Returns:** *"north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"*

___

###  toAngle

▸ **toAngle**(`direction`: "north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"): *number*

*Defined in [direction.js:81](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L81)*

Get the angle of a given direction.

**Parameters:**

Name | Type |
------ | ------ |
`direction` | "north" &#124; "east" &#124; "south" &#124; "west" &#124; "north-east" &#124; "north-west" &#124; "south-east" &#124; "south-west" |

**Returns:** *number*

Angle in radians

___

###  toVector

▸ **toVector**(`direction`: "north" | "east" | "south" | "west" | "north-east" | "north-west" | "south-east" | "south-west"): *[number, number]*

*Defined in [direction.js:101](https://github.com/danprince/silmarils/blob/310dab5/direction.js#L101)*

Create a unit vector from a direction.

**Parameters:**

Name | Type |
------ | ------ |
`direction` | "north" &#124; "east" &#124; "south" &#124; "west" &#124; "north-east" &#124; "north-west" &#124; "south-east" &#124; "south-west" |

**Returns:** *[number, number]*
