import { WebComponentsOptions } from 'fronts';
import { DynamicImport } from 'fronts';
import { FunctionComponent, ReactElement } from 'react';

export type AppWrapper<T> = FunctionComponent<
  {
    fallback?: ReactElement<any, any> | null;
  } & T
>;

export type IFrameWrapper<T> = FunctionComponent<
  {
    src?: string;
  } & T
>;

export type UseWebComponents = <
  T extends Record<string, any> = Record<string, any>
>(
  dynamicImport: DynamicImport,
  options?: Pick<
    WebComponentsOptions,
    Exclude<keyof WebComponentsOptions, 'target'>
  >
) => AppWrapper<T>;
