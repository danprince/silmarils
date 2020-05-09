[silmarils](../README.md) › [Globals](../globals.md) › ["angle"](_angle_.md)

# Module: "angle"

## Index

### Variables

* [DEGREES_0](_angle_.md#const-degrees_0)
* [DEGREES_180](_angle_.md#const-degrees_180)
* [DEGREES_270](_angle_.md#const-degrees_270)
* [DEGREES_360](_angle_.md#const-degrees_360)
* [DEGREES_90](_angle_.md#const-degrees_90)

### Functions

* [fromDegrees](_angle_.md#fromdegrees)
* [normalize](_angle_.md#normalize)
* [toDegrees](_angle_.md#todegrees)

## Variables

### `Const` DEGREES_0

• **DEGREES_0**: *0* = 0

*Defined in [angle.js:1](https://github.com/danprince/silmarils/blob/310dab5/angle.js#L1)*

___

### `Const` DEGREES_180

• **DEGREES_180**: *number* = Math.PI

*Defined in [angle.js:3](https://github.com/danprince/silmarils/blob/310dab5/angle.js#L3)*

___

### `Const` DEGREES_270

• **DEGREES_270**: *number* = Math.PI * 1.5

*Defined in [angle.js:4](https://github.com/danprince/silmarils/blob/310dab5/angle.js#L4)*

___

### `Const` DEGREES_360

• **DEGREES_360**: *number* = Math.PI * 2

*Defined in [angle.js:5](https://github.com/danprince/silmarils/blob/310dab5/angle.js#L5)*

___

### `Const` DEGREES_90

• **DEGREES_90**: *number* = Math.PI / 2

*Defined in [angle.js:2](https://github.com/danprince/silmarils/blob/310dab5/angle.js#L2)*

## Functions

###  fromDegrees

▸ **fromDegrees**(`degrees`: number): *number*

*Defined in [angle.js:13](https://github.com/danprince/silmarils/blob/310dab5/angle.js#L13)*

Convert an angle in degrees to radians.

**Parameters:**

Name | Type |
------ | ------ |
`degrees` | number |

**Returns:** *number*

radians

___

###  normalize

▸ **normalize**(`radians`: number): *number*

*Defined in [angle.js:33](https://github.com/danprince/silmarils/blob/310dab5/angle.js#L33)*

Normalize an angle to the interval [0, 2π].

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

___

###  toDegrees

▸ **toDegrees**(`radians`: number): *number*

*Defined in [angle.js:23](https://github.com/danprince/silmarils/blob/310dab5/angle.js#L23)*

Convert an angle in radians to degrees.

**Parameters:**

Name | Type |
------ | ------ |
`radians` | number |

**Returns:** *number*

degrees
