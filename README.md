## Project specification

Calculate total bill and split bills for diners

`npm install`

## Documentation

Built with a mean bistro in mind. Thought is that the waiter would be able to modify the menu and tax rate in the `config.json` via the terminal (or whatever UI they use). UI not included.

```
mealz.Diner('diner name',['dish','another dish'])
// Accepts a diner name (_string_) and dishes (_array_)

mealz.Meal([diner1, diner2], 0.2)
// Accepts a list of diner (_array_ based on newly instantiated diners) and a fixed tip amount.
```

## Potential Dev

1. If the users are the waiters, the tip amount is likely to be a fixed choice, simliar to this:
  ![](http://cl.ly/image/2p1Y3h0l0N1v/Screen%20Shot%202015-05-05%20at%201.48.58%20PM.png)
2. Print is rudimentary right now. Depending on the final forms, it can take different routes.

## Study notes

1. See [gist](https://gist.github.com/jueyang/8031edee619b8226a24d).
2. Debug tools!

`npm install -g node-inspector`
