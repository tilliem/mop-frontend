Variable                          | Purpose
----------------------------------|----------------------------------
API_URI                           | Base URI for API, without trailing slash, e.g. "http://0.0.0.0:8000" or "http://example.com/api/v1". _Required_.
API_WRITABLE                      | When true, server actions to submit new data (like petition signing/creating) will be sent to the server. _Default_: same value as `PROD`.
APP_ENTRY                         | For WebPack build, file name for app. _Default_: "main".
API_SIGN_PETITION                 | Full url endpoint to send submitted signatures to.  Without this, it will default to `${API_URI}/signatures`
BASE_APP_PATH                     | If the app is being served from a path other than the domain root, set this to that path. _Default_: "/".
ONLY_PROD_ROUTES                  | Only render production-ready routes (marked `prodReady`) and redirect all other paths to petitions.moveon.org
PROD                              | Boolean value indicating whether site should act as a production environment. _Options_: 0, 1. _Default_: "".
PUBLIC_ROOT                       | For WebPack dev server, the directory relative to server root where files are found. _Default_: "/".
SESSION_COOKIE_NAME               | When this cookie is present, user session data will be loaded from `API_URI`'s base. _Default_: "SO_SESSION".
STATIC_ROOT                       | For WebPack dev server, the relative path from initial page load to JS and other static assets. _Default_: "".
TRACK_SHARE_URL                   | A url endpoint that share events (e.g. from thanks page) should be sent to with details about the shared page.  (see `src/actions/petitionActions.js`). _Default_: "" (none).
