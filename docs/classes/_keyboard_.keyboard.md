[silmarils](../README.md) › [Globals](../globals.md) › ["keyboard"](../modules/_keyboard_.md) › [Keyboard](_keyboard_.keyboard.md)

# Class: Keyboard

## Hierarchy

* **Keyboard**

## Index

### Constructors

* [constructor](_keyboard_.keyboard.md#constructor)

### Methods

* [addEventListeners](_keyboard_.keyboard.md#addeventlisteners)
* [handleEvent](_keyboard_.keyboard.md#handleevent)
* [isDown](_keyboard_.keyboard.md#isdown)
* [removeEventListeners](_keyboard_.keyboard.md#removeeventlisteners)

## Constructors

###  constructor

\+ **new Keyboard**(): *[Keyboard](_keyboard_.keyboard.md)*

*Defined in [keyboard.js:58](https://github.com/danprince/silmarils/blob/310dab5/keyboard.js#L58)*

**Returns:** *[Keyboard](_keyboard_.keyboard.md)*

## Methods

###  addEventListeners

▸ **addEventListeners**(): *void*

*Defined in [keyboard.js:87](https://github.com/danprince/silmarils/blob/310dab5/keyboard.js#L87)*

Add the appropriate keyboard event listeners.

This method is called automatically when the keyboard is created.

**Returns:** *void*

___

###  handleEvent

▸ **handleEvent**(`event`: KeyboardEvent): *void*

*Defined in [keyboard.js:105](https://github.com/danprince/silmarils/blob/310dab5/keyboard.js#L105)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | KeyboardEvent |   |

**Returns:** *void*

___

###  isDown

▸ **isDown**(`keyCodeOrName`: string | number): *boolean*

*Defined in [keyboard.js:78](https://github.com/danprince/silmarils/blob/310dab5/keyboard.js#L78)*

Check whether a given key is down.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`keyCodeOrName` | string &#124; number |   |

**Returns:** *boolean*

___

###  removeEventListeners

▸ **removeEventListeners**(): *void*

*Defined in [keyboard.js:96](https://github.com/danprince/silmarils/blob/310dab5/keyboard.js#L96)*

Remove the event listeners for the keyboard. This can be used to stop
the keyboard processing events.

**Returns:** *void*
