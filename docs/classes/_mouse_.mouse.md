[silmarils](../README.md) › [Globals](../globals.md) › ["mouse"](../modules/_mouse_.md) › [Mouse](_mouse_.mouse.md)

# Class: Mouse

## Hierarchy

* **Mouse**

## Index

### Constructors

* [constructor](_mouse_.mouse.md#constructor)

### Methods

* [addEventListeners](_mouse_.mouse.md#addeventlisteners)
* [handleEvent](_mouse_.mouse.md#handleevent)
* [isDown](_mouse_.mouse.md#isdown)
* [removeEventListeners](_mouse_.mouse.md#removeeventlisteners)

## Constructors

###  constructor

\+ **new Mouse**(`element`: HTMLElement): *[Mouse](_mouse_.mouse.md)*

*Defined in [mouse.js:7](https://github.com/danprince/silmarils/blob/310dab5/mouse.js#L7)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`element` | HTMLElement | document.body |

**Returns:** *[Mouse](_mouse_.mouse.md)*

## Methods

###  addEventListeners

▸ **addEventListeners**(): *void*

*Defined in [mouse.js:47](https://github.com/danprince/silmarils/blob/310dab5/mouse.js#L47)*

Add the appropriate event listeners for the mouse.

This method is called automatically when a mouse object is created.

**Returns:** *void*

___

###  handleEvent

▸ **handleEvent**(`event`: MouseEvent): *void*

*Defined in [mouse.js:69](https://github.com/danprince/silmarils/blob/310dab5/mouse.js#L69)*

**`internal`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | MouseEvent |   |

**Returns:** *void*

___

###  isDown

▸ **isDown**(`button`: number): *boolean*

*Defined in [mouse.js:38](https://github.com/danprince/silmarils/blob/310dab5/mouse.js#L38)*

Check whether one of the mouse buttons is down.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`button` | number | MOUSE_BUTTON_LEFT |

**Returns:** *boolean*

___

###  removeEventListeners

▸ **removeEventListeners**(): *void*

*Defined in [mouse.js:58](https://github.com/danprince/silmarils/blob/310dab5/mouse.js#L58)*

Remove the event listeners for the mouse. This can be used to stop
the mouse processing events.

**Returns:** *void*
