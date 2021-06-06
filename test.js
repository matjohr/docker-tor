const got = require("got");
const tunnel = require("tunnel");

/**
 *  * Configure an HTTP client using TOR proxy
 *   * @type {import("got").Got}
 *    */
const client = got.extend({
	  agent: {
		    https: tunnel.httpsOverHttp({
			            proxy: { host: "tor", port: 8118 },
			          }),
			http: tunnel.httpsOverHttp({
			            proxy: { host: "tor", port: 8118 },
			          }),
		    },
});

async function run() {
//	  const body = await client.get("http://jsonip.com/").json();
	const body = await client.get("http://ipinfo.io/").json();
	return body;

	  // TODO: Do some stuff from under the proxy
 }

 run().then(ipinfo => {
    console.log("My IP", ipinfo);
  });
