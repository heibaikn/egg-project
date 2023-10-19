// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportApi from '../../../app/service/Api';
import ExportNews from '../../../app/service/News';
import ExportNotice from '../../../app/service/Notice';

declare module 'egg' {
  interface IService {
    api: AutoInstanceType<typeof ExportApi>;
    news: AutoInstanceType<typeof ExportNews>;
    notice: AutoInstanceType<typeof ExportNotice>;
  }
}
