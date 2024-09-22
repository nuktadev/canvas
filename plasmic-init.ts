import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "6rLVER9gHqqgXo44udNQF2",
      token:
        "SvcmqbFWQmoToF58xrbQ7xEAUArzijiw7JUQTSF4O1T97ougxLQ9KYVFlYmGNpqUwJ2i22IstEWYuHdHoQQ",
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
