# React 18 + SSR 💪

After React v18 is published, I think it's time to build React app with server-side rendering (SSR) once with those new APIs. Before that, I always use Next.js when it comes to SSR.

## Caveat ⚠️

This code isn't production-ready. Use with caution.

## What's new

React v18 introduces new SSR Architecture. Thanks to the new Suspense API, the process of SSR isn't waterfall-like anymore. Below are two major unlocked SSR features:

✅ Streaming HTML

✅ Selective Hydration

Want to know more? See https://github.com/reactwg/react-18/discussions/37 for details.

## Concept

Why do we need SSR? It's an important and very common question in the interview.

In the past, the web app was always rendered on the server in the form of HTML, which someone called Multiple Page Application (MPA). When the user clicked a link, the browser made an HTTP request to the server and waits for receiving the HTML of the next page.

However, when some modern frontend library like React.js comes up, the web app becomes Single Page Application (SPA). What does this mean? It becomes static! We can route between different pages without making requests to the server because everything is bootstrapped on client side.

Although SPA has a better user experience, it doesn't SEO-friendly and also makes the first painting longer. To solve those problems, the concept of Universal App (Hybrid) comes up, it combines the benefit of MPA and SPA, using server side rendering and making client routing works. Sounds great right? Moreover, most famous frameworks, like Next.js (React.js framework), Nuxt.js (Vue.js framework), and Svelte Kit (Svelte.js framework) already use this way to implement web apps.

## Implementation

We need a node server to render dehydrated React elements and use ReactDOM.hydrate to make our DOM interactive. There're some steps listed below:

- setup a koa server (for rendering)
- use ReactDOMServer to dehydrate
  - renderToString
  - renderToPipeableStream (new in React v18 ✨)
- use ReactDOM.hydrate

To here, we have already built the React app with the easiest SSR.

More Features:

- Routing
  - react-router-dom (BrowserRoutes & StaticRoutes)
  - https://reactrouter.com/docs/en/v6/guides/ssr
- Code Splitting
  - the most basic way is using dynamic import because common bundler support chunking according this.
  - React.Suspense + React.lazy (`renderToPipeableStream` is required!)
  - https://reactjs.org/docs/code-splitting.html#code-splitting
- Fetch data
  - WIP...

## Links

- https://github.com/reactwg/react-18/discussions/22
- https://github.com/reactwg/react-18/discussions/114
