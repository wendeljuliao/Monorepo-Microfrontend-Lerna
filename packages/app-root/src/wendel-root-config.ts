import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@wendel/todo",
  app: () =>
    System.import(
      "@wendel/todo"
    ),
  activeWhen: (location) => location.pathname === '/todo',
});

registerApplication({
  name: "@wendel/navbar",
  app: () =>
    System.import(
      "@wendel/navbar"
    ),
  activeWhen: ['/'],
});

registerApplication({
  name: "@wendel/info-app",
  app: () =>
    System.import(
      "@wendel/info-app"
    ),
  activeWhen: ['/info'],
});

registerApplication({
  name: "@wendel/punch-clock",
  app: () =>
    System.import(
      "@wendel/punch-clock"
    ),
  activeWhen: ['/ponto'],
});

// registerApplication({
//   name: "@wendel/navbar",
//   app: () => System.import("@wendel/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
