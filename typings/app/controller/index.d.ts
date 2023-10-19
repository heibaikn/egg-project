// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportApi from '../../../app/controller/api';
import ExportNews from '../../../app/controller/news';
import ExportNotice from '../../../app/controller/notice';

declare module 'egg' {
  interface IController {
    api: ExportApi;
    news: ExportNews;
    notice: ExportNotice;
  }
}
