export type FormError<T> = {
  [K in keyof T]: string[];
};
