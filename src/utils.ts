export const cleanPath = (path: string = "") => {
  // replace ^content/pages/ and .mdx$
  if (path?.trim() === "") return "";
  try {
    return path.replace(/^content\/pages/, "").replace(/\.mdx$/, "");
  } catch {
    return "";
  }
};
