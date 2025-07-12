import type { CollectionConfig } from "payload";

export const Banner: CollectionConfig = {
  slug: "banner",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "bannerImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "advertiseImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  upload: true,
};
