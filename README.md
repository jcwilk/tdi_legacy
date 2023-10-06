# Test Driven Interactions with GPT prototype (LEGACY VERSION)

![Demonstration of TDI legacy](demonstration.gif)

Summary of what takes place in the above gif:
* gif starts with the input to a "Write new step" step builder step opened and with a directive to build a step to combine two concepts entered
* closes the edit interface and runs the "Write new step" step
* the step builder step begins building a new step for combining two concepts to satisfy the request
* once the new step is complete, it appears next to the prior "Write new step" under a name GPT chose, "Combine Concepts"
* we then add some contrived concepts to the two inputs, "big tall redwoods" and "tuna sashimi"
* we then run the new Combine Concepts step under varying "temperature" levels (randomness/entropy) to get increasingly bizarre results

In short, any text-oriented behavior can be automatically created from nothing based on a long-form English description, then it can be run with arbitrary inputs.

## NOTE ON LEGACY-ness

The main project is over at [jcwilk.github.io/tdi](https://jcwilk.github.io/tdi) - I ended up taking it in a different direction from what's
present here because it turns out that simply using a chat interface to interact with GPT is truly the best generalized interface, albeit significantly
more difficult to build than the simple "step" approach present in this project. There's a substantial amount of code present here for one person to maintain, so instead of continuing to maintain these mostly unused interfaces I decided to split it into a separate project and freeze it so I can rip them out from the main project.

## the rest of old "documentation"

This is a prototype for a more comprehensive flow of building software function-by-function via code-guided interactions with GPT.

It can be visited at [jcwilk.github.io/tdi_legacy](https://jcwilk.github.io/tdi_legacy) - It requires your openai api key which it stores in LocalStorage. Use at your own risk.

## How to run

`npm run dev` - run dev server

If you'd like to build under prod mode to test locally:

`npm run build` - build for prod

But this shouldn't be necessary since you can just use Pages!
