undotify
========

Gets the value of an object, by a dotnotated path

### Example

```js
var json = {
  "drinks": {
    "alcoholic": {
      "beer": "Augustiner",
      "cider": "Bulmers"
    },
    "nonalc": {
      "coffee": "Cappuccino",
      "juice": "Orangejuice"
    }
  }
};

var iWouldLikeToDrink = undotify('drinks.nonalc.coffee', json);
// Cappuccino
```
