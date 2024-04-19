import { PortableTextBlock } from "next-sanity";

export type About = {
  id: string;
  name: string;
  image: string;
  content: PortableTextBlock[];
};
