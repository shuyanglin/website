import { PortableTextBlock } from "next-sanity";
import { Organisation } from "./Organisation";

export type Calendar = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  slug: string;
  type: string;
  topic: string;
  organisations: Organisation[];
  location: string;
  image: string;
  content: PortableTextBlock[];
};
