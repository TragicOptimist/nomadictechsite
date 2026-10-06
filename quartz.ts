import { componentRegistry } from "./quartz/components/registry"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

// Keep the `attachments/` folder out of the explorer sidebar.
//
// The folder must stay *published*: the Reading list `.base` reads its entries
// from `attachments/books`, and the assets emitter copies the cover images from
// there. Marking those notes `unlisted`/ignoring the folder would break both —
// `resolveBasesEntries` skips any entry with `unlisted === true`.
//
// So we filter the folder out of the explorer tree only. The note pages remain
// reachable by direct URL (e.g. from the Reading list cards).
//
// Note: the explorer's built-in default filter drops the `tags` folder, and a
// user-supplied `filterFn` replaces that default, so it is re-stated here.
// The function is serialized with `.toString()` and rebuilt client-side via
// `new Function`, so it must not reference anything from this scope.
componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  filterFn: (node: any) => node.slugSegment !== "tags" && node.slugSegment !== "attachments",
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
