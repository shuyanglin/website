import { PortableTextBlock } from "next-sanity";

export type Project = {
  id: string;
  name: string;
  slug: string;
  type: string;
  oneliner: string;
  image: string;
  content: PortableTextBlock[];
};
