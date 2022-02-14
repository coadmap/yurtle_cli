declare global {
  type SizeType = "sm" | "md" | "lg";

  // FIXME: ここにあるべきじゃない感
  interface ApiRequestResult<TInput, TPayload, TError = Error> {
    data: TPayload;
    loading: boolean;
    error: TError;
  }

  type AwaitType<T> = T extends Promise<infer U>
    ? U
    : T extends (...args: Array<any>) => Promise<infer V>
    ? V
    : T;
}
export {};
