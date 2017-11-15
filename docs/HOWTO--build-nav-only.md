# How to Build a Nav-only Version of the App

1. `export APP_ENTRY="nav-only"`
2. `npm run build`
3. Include the resulting file, along with React and React DOM, in any pages that need only dynamic nav, e.g.:
```
<script type="text/javascript" src="https://unpkg.com/react@15.4.1/dist/react.js"></script>
<script type="text/javascript" src="https://unpkg.com/react-dom@15.4.1/dist/react-dom.js"></script>
<script type="text/javascript" src="/nav-only.js"></script>
```
4. `unset APP_ENTRY` (to enable building full app again)
