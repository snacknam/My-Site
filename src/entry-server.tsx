import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./App";
export { archives, archiveLabels } from "./content/archives";
export { photographs, photoAlbums, photographyLabels } from "./content/photography";

export function render(url: string) {
  return renderToString(<StaticRouter location={url}><App /></StaticRouter>);
}
