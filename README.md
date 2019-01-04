## SEE STATIC DEMO FOR ALL INSTRUCTUIONS FOR THE REPRODUCER

[Link to Static Demo](https://updater.github.io/chromium-ios-bug-reproducer/)


How to run locally

```
yarn
yarn demo:custom
```

Webpack dev server used for local dev. Build is used to create static page for index.html.

> There is a "custom element" version which reproduces the issue in chrome 71+

> There is a "simple" version which reproduces the issue in chrome 64

> For all intents and purposes, focus on the "reproducer-custom-element" which is built using `yarn demo:custom`

> But if so desired, you can also test with "reproducer-simple" on older versions of chrome by using `yarn demo:simple`


