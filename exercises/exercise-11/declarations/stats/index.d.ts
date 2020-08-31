declare module 'stats' {

  interface IndexFunc<T> {
    (input: T[], comparator: (a: T, b: T) => number): number;
  }

  type Comparator<T> {
    (a: T, b: T): number
  }

  export function getMaxIndex<T>(
    input: T[],
    comparator: (a: T, b: T) => number
  ): number;

  export function getMaxElement<T>(
    input: T[],
    comparator: Comparator<T>
  ): null | T;

  export function getMinIndex<T>(
    input: T[],
    comparator: Comparator<T>
  ): number;

  export function getMinElement<T>(
    input: T[],
    comparator: Comparator<T>
  ): null | T;

  export function getMedianIndex<T>(
    input: T[],
    comparator: Comparator<T>
  ): number;

  export function getMedianElement<T>(
    input: T[],
    comparator: Comparator<T>
  ): null | T;

  export function getAverageValue<T>(
    input: T[],
    getValue: (item: T) => number
  ): null | number;
}
