const express = require('express')
const exphbs  = require('express-handlebars')

const app = express()
const port = process.env.PORT || 5000

app.engine('handlebars', exphbs({
  extname: '.html',
  helpers: {
    json (arg) { return JSON.stringify(arg) }
  }
}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/:name/:url/app', function (req, res) {
  const {name, url} = getParams(req)
  const baseUrl = getBaseUrl(name, url)
  res.render('app/index', {
    baseUrl,
    name: name,
    swUrl: baseUrl + '/sw.js',
    url
  })
})

app.get('/:name/:url/site.webmanifest', function (req, res) {
  const {name, url} = getParams(req)
  const baseUrl = getBaseUrl(name, url)
  res.render('app/webmanifest', {
    name: JSON.stringify(name),
    startUrl: JSON.stringify(baseUrl + '/app')
  })
})

app.get('/:name/:url/sw.js', function (req, res) {
  res.contentType('application/javascript')
  const {name, url} = getParams(req)
  const baseUrl = getBaseUrl(name, url)
  res.render('app/sw', {
    name,
    startUrl: JSON.stringify(baseUrl + '/app'),
  })
})

// Encoded "\" (%5c) and "/" "%2f" are not allowed in the service worker scope
// therefore app and url params are double encoded.
// https://www.w3.org/TR/service-workers-1/#navigator-service-worker-register
function encodeParam (param) {
  return encodeURIComponent(encodeURIComponent(param))
}

function getParams (req) {
  const {name, url} = req.params
  return {
    // Decode double-encoded params
    name: decodeURIComponent(name),
    url: decodeURIComponent(url)
  }
}

function getBaseUrl (name, url) {
  return `/${encodeParam(name)}/${encodeParam(url)}`
}

app.listen(port, () => console.log(`Listening on port ${port}!`))
