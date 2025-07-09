export type PrefixKeysWithDollar<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};
