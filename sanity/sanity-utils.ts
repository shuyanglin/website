import { Project } from "@/app/types/Project";
import { About } from "@/app/types/About";
import { Calendar } from "@/app/types/Calendar";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Organisation } from "@/app/types/Organisation";
const client = createClient(clientConfig);

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
        "id" :_id,
        name,
        "slug": slug.current,
        type,
        oneliner,
        "image": image.asset->url, 
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        "id" :_id,
        name,
        "slug": slug.current,
        type,
        oneliner,
        "image": image.asset->url,
        content, 
    }`,
    { slug: slug }
  );
}

export async function getAbout(): Promise<About> {
  return client.fetch(
    groq`*[_type == "about"][0]{
        "id" :_id,
        name,
        "image": image.asset->url,
        content, 
    }`
  );
}

export async function getCalendars(): Promise<Calendar[]> {
  return client.fetch(
    groq`*[_type == "calendar"]| order(startDate desc){
        "id" :_id,
        name, 
        startDate,
        endDate,
        "slug": slug.current,
        type,
        topic,
        organisations[]->,
        location,
        "image": image.asset->url, 
        content,
    }`
  );
}

export async function getOrganisations(): Promise<Organisation[]> {
  return client.fetch(
    groq`*[_type == "organisations"]{
        "id" :_id,
        name, 
        url,
        "image": image.asset->url, 
    }`
  );
}
