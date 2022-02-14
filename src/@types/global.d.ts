declare global {
  type SizeType = "sm" | "md" | "lg";

  // FIXME: ここにあるべきじゃない感
  interface ApiRequestResult<TInput, TPayload, TError = Error> {
    data: TPayload;
    loading: boolean;
    error: TError;
  }
}
export {};
