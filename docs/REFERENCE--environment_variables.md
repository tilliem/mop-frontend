Variable                          | Purpose
----------------------------------|----------------------------------
API_URI                           | Base URI for API, without trailing slash, e.g. "http://0.0.0.0:8000" or "http://example.com/api/v1". _Required_.
BASE_APP_PATH                     | If the app is being served from a path other than the domain root, set this to that path. _Default_: "/".
PROD                              | Boolean value indicating whether site should act as a production environment. _Options_: 0, 1. _Default_: "".
PUBLIC_ROOT                       | For WebPack dev server, the directory relative to server root where files are found. _Default_: "/".
STATIC_ROOT                       | For WebPack dev server, the relative path from initial page load to JS and other static assets. _Default_: "".
