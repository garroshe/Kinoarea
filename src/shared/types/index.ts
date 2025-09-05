export type PrefixKeysWithDollarType<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};
