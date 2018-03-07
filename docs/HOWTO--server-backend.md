# How to Develop with a Server Backend

When running locally, you should set the following environment variables:

```
export API_URI="https://petitions.example.com"
export BASE_APP_PATH="/Users/yourusername/Sites/mop-frontend/local/"
export STATIC_ROOT="../../build/"
```

`API_URI` can either point at a hosted version of the API (as in the example), or a local instance of mop (something like `http://0.0.0.0:8000`).

`BASE_APP_PATH` is everything that comes after `file://` in your browser's local file URL, up to and including `/local/`.

`STATIC_ROOT` is the path from the HTML file you're testing to the compiled JavaScript. e.g. for `/local/thanks.html`, the relative path is `../js/`, but for `/local/sign/economic-disparity-campaign`, the relative path is one more step away, `../../js/`
