declare global {
  /**
   * DesignSystem
   * **/
  type SizeType = "sm" | "md" | "lg";
  type Color = "primary" | "special" | "default" | "sub" | "danger" | "warning";

  /**
   * Utils
   * **/
  type AwaitType<T> = T extends Promise<infer U>
    ? U
    : T extends (...args: Array<any>) => Promise<infer V>
    ? V
    : T;

  /// Mutationのinput的なやつにつかえる簡単にnullableなフィールドをundefinedableにしてくれるやつ
  type InputType<
    T extends { id: string }, // Entity型を指定
    NullableKey extends keyof T = { [K in keyof T]: null extends T[K] ? K : never }[keyof T],
    NullPartialT = Partial<Pick<T, NullableKey>> & Pick<T, Exclude<keyof T, NullableKey>>
  > = { [K in keyof NullPartialT]: NullPartialT[K] };
}
export {};
