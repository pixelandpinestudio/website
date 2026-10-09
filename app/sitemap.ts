import type { MetadataRoute } from "next";
import { services, site } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", ...services.map((s) => `/services/${s.slug}`), "/about", "/contact", "/privacy-policy", "/terms", "/cookie-policy"];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
