import React from "react";
import { getProject } from "@/sanity/sanity-utils";
import { createClient, PortableText } from "next-sanity";
import { Box, Typography } from "@mui/material";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
type Props = {
  params: { slug: string };
};

import clientConfig from "@/sanity/config/client-config";
const client = createClient(clientConfig);

const Project = async ({ params }: Props) => {
  const slug = params.slug;

  const project = await getProject(slug);
  console.log("project:");
  console.log({ project });
  const SampleImageComponent = ({
    value,
    isInline,
  }: {
    value: any;
    isInline: boolean;
  }) => {
    const { width, height } = getImageDimensions(value);
    return (
      <Image
        width={300}
        height={300}
        src={urlBuilder(client)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    );
  };
  const components = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  };
  return (
    <div>
      <Typography variant="h3">{project.name}</Typography>
      <Box sx={{ m: 3 }}>
        <div className="prose prose-img:border">
          <PortableText value={project.content} components={components} />
        </div>
      </Box>
    </div>
  );
};

export default Project;
