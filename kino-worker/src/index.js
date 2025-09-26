export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname === '/images') {
			const count = Math.max(1, Math.min(1000, Number(url.searchParams.get('count') || 10)));

			const { objects } = await env.KINO_BUCKET.list({ limit: count }); // lexicographic order
			const items = objects.map((o) => ({
				key: o.key,
				url: `${env.PUBLIC_ASSETS_BASE}/${o.key}`, // public GET only
			}));

			return new Response(JSON.stringify(items), {
				headers: {
					'content-type': 'application/json',
					'access-control-allow-origin': '*', // so any future frontend can fetch
					'cache-control': 'no-store',
				},
			});
		}

		// simple 200 for root
		return new Response('ok. try /images?count=n', {
			headers: { 'content-type': 'text/plain' },
		});
	},
};
