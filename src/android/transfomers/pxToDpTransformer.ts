import type { Transform, TransformedToken } from "style-dictionary/types";

/**
 * Convert from px to dp for Android Compose.
 */
export default {
  name: "android/pxToDp",
  type: "value",
  transitive: true,
  filter: (token: TransformedToken): boolean => {
    const value = token.$value?.toString() ?? "";
    // This can be filter by type or attribute to be more precise if needed
    // Filter tokens that have px values and aren't already dp
    return value.includes("px") && !value.includes("dp");
  },
  transform: (token: TransformedToken): string => {
    const value = token.$value?.toString() ?? "";
    // Extract the number and add .dp suffix
    const numValue = value.replace("px", "").trim();
    const result = `${numValue}.dp`;
    return result;
  },
} satisfies Transform;
