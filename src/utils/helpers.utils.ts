import { Nullable } from "types";

type NullableObject = Nullable<Record<string, unknown>>;

export const isEmptyObject = (obj: NullableObject): boolean => {
  return Boolean(obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype);
};
