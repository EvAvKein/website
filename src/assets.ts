// Components use simple asset paths like "projects/foo.png", but Vite renames
// those files when bundling. This module resolves those paths to Vite's URLs.
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
