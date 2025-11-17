import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    role: z.string().optional(),
    pitch: z.string().optional(),
    highlights: z.array(z.string()).optional(),

    // For actual media files (images, gifs, videos)
    gallery: z
      .array(
        z.union([
          z.string(), // Direct URL to image/gif
          z.object({
            src: z.string(),
            type: z.enum(["image", "video", "gif"]),
            alt: z.string().optional(),
            caption: z.string().optional(),
            poster: z.string().optional(), // Thumbnail for videos
          }),
        ]),
      )
      .optional(),

    // Small video used only on the home project card
    thumbnailVideo: z
      .object({
        src: z.string(),
        poster: z.string().optional(),
      })
      .optional(),

    // For external media links (trailers, demos, etc.)
    media: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),

    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),

    lessons: z.array(z.string()).optional(),

    // Add placeholder flag
    hasGalleryPlaceholder: z.boolean().optional().default(false),
  }),
});


export const collections = { projects };