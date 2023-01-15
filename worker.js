export default {
  fetch: req => {
    const { pathname, search } = new URL(req.url)
    if (pathname == '/api') {
      return new Response(JSON.stringify({ message: 'Hello World!' }), {'content-type': 'application/json' })
    } else {
      const url = pathname == '/' ? 'https://ctx.do/api' : 'https:/' + pathname + search
      return fetch(url, { headers: {
        'referer': new URL(url).origin,
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
      } })
    }
  }
}

const headers = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
}
