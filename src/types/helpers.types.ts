/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export type Negatives = null | undefined;

export type Primitives = number | string | boolean | bigint | Negatives;

export type ExtractComponent<Type> = Type extends React.FC<infer X> ? X : never;

export type Nullable<T> = T | Negatives;

export type Cast<X, Y> = X extends Y ? X : Y;

export type PartialBy<T extends Record<string, unknown>, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type PartialKeys<T extends Record<string, unknown>> = {
  [K in keyof T]?: Partial<T[K]>;
};

export type NonNullableKeys<T> = {
  [P in keyof T]-?: NonNullable<T[P]>;
};

export type NullableKeys<T> = {
  [P in keyof T]-?: Nullable<T[P]>;
};

export type ParamType = string | number;

export type ExtractRouteParams<T extends string> = string extends T
  ? null
  : T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof ExtractRouteParams<Rest>]: ParamType }
  : T extends `${infer _Start}:${infer Param}`
  ? { [k in Param]: ParamType }
  : null;

export type First<T> = T extends [infer U, ...unknown[]] ? U : unknown;
