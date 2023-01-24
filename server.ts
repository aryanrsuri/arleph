import { serve } from "aleph/solid-server";
import routes from "./routes/_export.ts";

serve({
  router: { routes },
  ssr: true,
});
