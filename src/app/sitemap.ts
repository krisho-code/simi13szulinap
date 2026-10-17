import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date() }));
}
