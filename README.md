# netlify-build-from-api

Attempting to get a manual deploy from netlify to use the build pipeline when triggered by the node client. Steps to reproduce:

### Clone this repo

```
git clone https://github.com/mknudsen01/netlify-build-from-api.git
```

### Install dependencies

```js
yarn
```

### Add your Netlify Access Token to a `.env` file

```ruby
# .env
NETLIFY_ACCESS_TOKEN = yourToken
```

### Start the server

```js
yarn start
```

### Ping the server to run a manual deploy of the `folder-to-build-after-deploy` directory

```
curl -X POST http://localhost:7777/api/deploy
```

---

#### Expected, if builds are run for manual deploys:

Netlify would show build logs from running the build commands I have, both in the plugin's `prebuild` handler and the package.json's `build` command.


#### Actual:

Netlify build logs show nothing regarding running any build. The build logs only show:

```
2:05:44 PM: Starting post processing
2:05:44 PM: Post processing done
2:05:44 PM: Site is live
```
