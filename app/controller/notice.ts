import { Controller } from 'egg';
import { Pagination } from '../../typings/app/common';

export default class NoticeController extends Controller {
  public async query() {
    const { ctx, app } = this;

    // console.log(model);
    // this.ctx.model
    const params = {
      offset: Number.parseInt(ctx.query?.page || '1') - 1,
      limit: Number.parseInt(ctx.query?.pageSize || '20')
    } as Pagination;
    params.offset < 0 && (params.offset = 0);
    const rows = await ctx.service.notice.query(params);
    ctx.body = ctx.helper.response({
      count: rows.count,
      list: rows.rows,
      page: params.offset + 1,
      pageSize: params.limit,
      keyword: rows.keyword
    });
  }

  public async error() {
    const { ctx } = this;
    ctx.set('Content-Type', 'application/json');
    ctx.response.status = 500;
    ctx.body = ctx.helper.responseError({
      msg: 'error',
      code: 50001
    })
  }

  public async add() {
    const { ctx } = this;
    const payload = ctx.helper.omitEmpty(['endTime'], ctx.request.body)
    const userInfo = await ctx.service.notice.add(payload);
    ctx.body = ctx.helper.response(userInfo);
  }

  public async edit() {
    const { ctx } = this;
    const payload = ctx.helper.omitEmpty(['endTime'], ctx.request.body)
    const userInfo = await ctx.service.notice.update(payload);
    ctx.body = ctx.helper.response(userInfo);
  }
  public async delete() {
    const { ctx } = this;
    const id = ctx.helper.toInt(ctx.params.id);
    const res =  await this.ctx.service.notice.delete(id);
    this.ctx.body = ctx.helper.response(res);
  }
}
