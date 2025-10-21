const globImports: Record<string, string> = import.meta.glob("/src/assets/**", {
	eager: true,
	query: "?url",
	import: "default",
});

function normalizeAssetPath(src: string) {
	return src
		.replace(/^(\.\/|\/)+/, "")
		.replace(/^src\//, "")
		.replace(/^assets\//, "");
}

const assetMap = new Map<string, string>();
for (const [filePath, url] of Object.entries(globImports)) {
	assetMap.set(normalizeAssetPath(filePath), url);
}

export function assetSrc(src: string) {
	return assetMap.get(normalizeAssetPath(src)) ?? src;
}
