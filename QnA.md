# QnA

### Planning

> What do you think are the greatest areas of risk in completing the project?

- Definetly time, I'm really busy at work with tight deadlines, my wife is pregnant then she needs more attention and also we have a few doctor appointments this week, so it was quite difficult manage everything.

> What changes/additions would you make to the design?

- The design is pretty good, simple and clean, I'd add more options like links to issues/pull requests, also the ability to add/edit/view comments/issues/PR. 

> List a two or three features that you would consider implementing in the future that would add significant value to the project.

- Pagination is a must have feature that I'd add, at this point it would be super simple to include it since the project is already setup for it.
- As mentioned before a few nice features would be the ability to add/edit/view issues/pull-requests/comments.
- Add the ability to view more information about issues/PR since the listing view has limited space to allow it.
- On the technical side I'd use Graphql rather than just REST to feach Github's api.
- Also I'd refactor the app to include some typing system like [Flow](https://flow.org/), [Typescript](https://www.typescriptlang.org/) or even better [PureScript](http://www.purescript.org/) 

---

### Looking Back

> Describe the major design/build decisions and why you made them.

- So the project needed to be responsive and I noticed that the design was essentially following the Material Design concepts, therefore I decided to use [React Material Design](https://material-ui.com/) which brings a lot of out of the box components which made the responsiviness work quite simple.
- I've decided to use [Styled Components](https://www.styled-components.com/) which is a really powerful library to manage inline react styles in a really fashion way, 
- I've also used:
  - [Immutable.js](https://facebook.github.io/immutable-js/): To create an efficient immutable redux store.
  - [Reselect](https://github.com/reduxjs/reselect): Reselect helps creating a memoization system, caching functions calls to avoid recomputation.
  - [Redux Saga](https://redux-saga.js.org/): To help with side effect work like data fetching.
  - [React-Loading](https://github.com/jamiebuilds/react-loadable): Code-splitting is the process of taking one large bundle containing your entire app, and splitting them up into multiple smaller bundles which contain separate parts of your app, which brings a huge performance improvements long term.
  - [Ramda](https://ramdajs.com/docs/): As a really helpful functional programming library to help with data transformation.
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader): A really nice to have library to hot reload components withou reset the react and redux state.
  - [Recompose](https://github.com/acdlite/recompose): Which is a really helpful lib to compose HOCs.

> How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").

- Learning Framework: 0h (I didn't learn any new framework)
- Coding: ~5h (This is balpark estimation, since I didn't do everthing in one sitting)
- Debugging: ~1h

> If you could go back and give yourself advice at the beginning of the project, what would it be?

- Take a day off from work to have more time to implement this project.
- Don't work on this project over the weekend, your wife is going to be mad at you.
- Drink less coffee, drink more water.

> Did you learn anything new?

- No

> Do you feel that this assignment allowed you to showcase your abilities effectively?

- I feel that it allowed me to "partially" show my abilities, as I mentioned I didn't have time I wanted to make the perfect work, however "done is better than perfect"

> Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?

- Usage of flow/typescript or pure script to create a type safe project.
- Apollo Graphql integration for the data fetching layer which would pottentially improve the http latency.
- Functional Programming: The project was quite small and simple then I couldn't show how functional programming is a really amazing coding paradigm which give us the ability to create testable and maintainable code.
- Unit testing: I really like TDD (Test Driven Development), unfortunally I didn't use it on this assignment due to the small amount of time I had to work on it.
