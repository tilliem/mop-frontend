# How to develop with theme-giraffe

Normally, to develop mop-frontend with theme-giraffe, you can run

```
THEME=giraffe npm run dev
```

This means that when we import presentational components from `Theme/`, webpack will look in
`src/components/theme-giraffe`, rather than the current default of "theme-legacy".

By default, CSS will be loaded from https://mop-static-stage.s3-us-west-1.amazonaws.com/giraffe/styles/main.css.

## Developing new css for theme-giraffe

If you'd like to change giraffe css, you'll need clone the giraffe repo, and set up its dependences,
like gulp. See https://github.com/MoveOnOrg/giraffe/blob/main/CONTRIBUTING.md

In the giraffe folder you can run
```
gulp proxy-mop-frontend
```
Which uses browsersync to run a local server that proxies mop-frontend running on the default port,
and also compiles the giraffe scss files and makes them available at localhost:3000/styles/main.css.

Concurrently, we need to run mop-frontend's dev server for browsersync to proxy. We also need to
point it at the css that gulp has compiled.

So in another terminal in the mop-frontend folder, run
```
THEME=giraffe LOCAL_CSS=/styles/main.css npm run dev
```

Now use your browser to load up the browsersync proxied version of mop-frontend, usually at
http://localhost:3000

Changes you make in giraffe/src/styles are being watched by gulp, and will trigger a live css update
in the running mop-frontend.