import { serve } from "aleph/solid-server";
import routes from "./routes/_export.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";
serve({
  router: { routes },
  ssr: true,
  unocss: {
    presets: [presetUno()],
  },
});
