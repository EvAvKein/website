const globImports: Record<string, string> = import.meta.glob("/src/assets/**", {
	eager: true,
	query: "?url",
	import: "default",
});

function normalize(src: string) {
	return src
		.replace(/^(\.\/|\/)+/, "")
		.replace(/^src\//, "")
		.replace(/^assets\//, "");
}

const assetMap = new Map<string, string>();
for (const [filePath, url] of Object.entries(globImports)) {
	assetMap.set(normalize(filePath), url);
}

export function assetSrc(src: string) {
	if (!src) return src;
	const key = normalize(src);
	return assetMap.get(key) ?? src;
}
