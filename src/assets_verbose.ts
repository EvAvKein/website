const _modules = (() => {
	// prefer Vite's glob with "as: 'url'" when available
	try {
		return import.meta.glob("/src/assets/**", {eager: true, as: "url"}) as Record<string, string>;
	} catch {
		// fallback to globEager and extract default or module value
		const raw = (import.meta as any).globEager("/src/assets/**") as Record<string, any>;
		return Object.fromEntries(
			Object.entries(raw).map(([k, m]) => [k, (m && (m.default || m)) as string]),
		);
	}
})();

const assetMap = new Map<string, string>();
for (const [filePath, url] of Object.entries(_modules)) {
	// normalize key variants so callers can pass "assets/...", "/assets/...", "./assets/...", "logo.png", etc.
	const stripped = filePath.replace(/^\.?\/?src\//, "").replace(/^\/+/, "");
	assetMap.set(stripped, url);
	assetMap.set(`/${stripped}`, url);
	assetMap.set(`./${stripped}`, url);

	if (stripped.startsWith("assets/")) {
		const withoutAssets = stripped.slice("assets/".length);
		assetMap.set(withoutAssets, url);
		assetMap.set(`/${withoutAssets}`, url);
		assetMap.set(`./${withoutAssets}`, url);
	}
}

export function assetSrc(src: string) {
	if (!src) return src;

	if (assetMap.has(src)) return assetMap.get(src)!;

	const normalized = src.replace(/^\.?\/+/, "");

	if (assetMap.has(normalized)) return assetMap.get(normalized)!;
	if (assetMap.has(`assets/${normalized}`)) return assetMap.get(`assets/${normalized}`)!;
	if (assetMap.has(`/${normalized}`)) return assetMap.get(`/${normalized}`)!;

	// fallback: if it's already a URL or external, return as-is
	return src;
}
