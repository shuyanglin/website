import { SlugSourceFn } from "sanity";

const handleSlugSource: SlugSourceFn = async (doc) => {
  return doc.name + " " + doc.startDate;
};

const calendar = {
  name: "calendar",
  title: "Calendar",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: handleSlugSource,
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "topic",
      title: "Topic",
      type: "string",
    },
    {
      name: "organisations",
      title: "Organisation(s)",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "organisation" }],
        },
      ],
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      title: "url",
      name: "URL",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};

export default calendar;
