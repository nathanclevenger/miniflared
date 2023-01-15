import { Miniflare } from 'miniflare'

const mf = new Miniflare({
  // envPath: true,
  // packagePath: true,
  // wranglerConfigPath: true,
  // modules: true,
  actualTime: true,
  scriptPath: 'worker.js',
  port: 5005,
})

// const data = await mf.dispatchFetch('http://example.com', {
//   headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15' }
// }).then(res => res.json())

// console.log(data)

mf.startServer()
const server = await mf.startServer();
const { HTTPPlugin } = await mf.getPlugins()
server.listen(HTTPPlugin.port, () => {
  console.log(`Listening on :${HTTPPlugin.port}`);
})