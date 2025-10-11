import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ranabirjanahit.edu.np";

const routes = [
  "/",
  "/about",
  "/academics",
  "/academics/ctevt",
  "/admissions",
  "/admissions/ctevt",
  "/campus",
  "/campus/facilities",
  "/campus/labs",
  "/campus/library",
  "/campus-life",
  "/student-life",
  "/alumni",
  "/gallery",
  "/events",
  "/news",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
