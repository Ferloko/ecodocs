import { createLegacyRoute } from "@/lib/create-legacy-route";

const { metadata, Page } = createLegacyRoute("blog");

export { metadata };
export default Page;
