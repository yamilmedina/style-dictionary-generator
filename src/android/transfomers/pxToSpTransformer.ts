import type { Transform, TransformedToken } from "style-dictionary/types";

/**
 * Convert from sp to dp for Android Compose.
 * 
 */
export default {
  name: "android/pxToSp",
  type: "value",
  transitive: true,
  filter: (token: TransformedToken): boolean => {
    const value = token.$value?.toString() ?? "";
    // This can be filter by type or attribute to be more precise if needed
    // Filter tokens that have px values and aren't already dp
    return token.attributes?.category === "Font Size" && (value.includes("px") || token.$value.includes("dp"));
  },
  transform: (token: TransformedToken): string => {
    const value = token.$value?.toString() ?? "";
    // Extract the number and add .dp suffix
    const numValue = value.replace(".px", "").replace(".dp", "").trim();
    const result = `${numValue}.sp`;
    return result;
  },
} satisfies Transform;
