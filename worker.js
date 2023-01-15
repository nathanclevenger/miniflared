// export default {
//   fetch: req => fetch('https://ctx.do/api')
// }

const headers = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
}

addEventListener("fetch", (event) => {
  const req = new Request(event.request)
  // req.headers.delete('mf-loop')
  // event.respondWith(fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2', { headers })) //, event.request))
  // event.respondWith(fetch('https://ctx.do/api', { headers })) //, event.request))
  event.respondWith(new Response(JSON.stringify({ hello: 123}), { headers: { 'content-type': 'application/json' } }))
})