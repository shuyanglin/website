import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import project from "./sanity/schema/project-schema";
import about from "./sanity/schema/about-schema";
import calendar from "./sanity/schema/calendar-schema";
import organisation from "./sanity/schema/organisation-schema";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from
  title: "Shu's Studio",
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool({
      // Note: These are both optional
      defaultApiVersion: "v2021-10-21",
      defaultDataset: dataset,
    }),
  ],
  schema: { types: [project, about, calendar, organisation] },
  useCdn: true,
});
