import { ExtractRouteParams, Negatives } from "types";

export const getLinkPath = <T extends string>(
  path: T,
  ...paramsArray: ExtractRouteParams<T> extends Negatives ? [] : [ExtractRouteParams<T>]
): string => {
  let routePath: string = path;
  const params = paramsArray[0];
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      routePath = routePath.replaceAll(new RegExp(`:${key}`, "g"), String(value));
    });
  }

  return routePath;
};
