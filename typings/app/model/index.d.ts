// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportApi from '../../../app/model/api';
import ExportNotice from '../../../app/model/notice';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Api: InstanceType<ExportApi>;
    Notice: InstanceType<ExportNotice>;
    User: InstanceType<ExportUser>;
  }
}
