import { Controller } from 'egg';
import { ApiAddParams, ApiQueryInfoParams, ApiQueryParams, ApiUpdateParams } from '../../typings/lib';

export default class ApiController extends Controller {
  public async query() {
    const { ctx, app } = this;
    const params = {
      offset: Number.parseInt(ctx.query?.page || '1') - 1,
      limit: Number.parseInt(ctx.query?.pageSize || '20'),
      name: ctx.params.name
    } as ApiQueryParams;
    params.offset < 0 && (params.offset = 0);
    const rows = await ctx.service.api.query(params);
    const list = rows.rows.map(item => {
      return this.flatResData(item)
    });
    ctx.body = ctx.helper.response({
      count: rows.count,
      list: list,
      page: params.offset + 1,
      pageSize: params.limit,
      keyword: rows.keyword
    });
  }
  public async queryInfo() {
    const { ctx, app } = this;
    const params = {
      name: ctx.params.name,
      id: ctx.params.id
    } as ApiQueryInfoParams;
    const row = await ctx.service.api.queryInfo(params);
    const list = this.flatResData(row)
    const ret = ctx.helper.response(list);
    if (ctx.query?.export === 'true') {
      this.ctx.set('Content-Type', 'application/octet-stream');
      ctx.set('Content-Disposition', `attachment; filename="${row.keyword}-${row.id}.json"`);
      ctx.set("X-Gm-Download-Filename",`${row.keyword}-${row.id}.json`)
      ctx.body = JSON.stringify(ret);
    } else {
      ctx.body = ret;
    }
  }

  private flatResData(res: any) {
    if (res.body) {
      res = Object.assign({
        "gm_t_id": res.id,
      }, res.body, {
        created_at: res.createdAt,
        updated_at: res.updatedAt,
      })
    }
    return res;
  }
  public async add() {
    const { ctx } = this;
    const payload = {
      body: ctx.request.body,
      name: ctx.params.name
    } as ApiAddParams;
    const apiInfo = await ctx.service.api.add(payload);
    const res = this.flatResData(apiInfo)
    ctx.body = ctx.helper.response(res);
  }

  public async edit() {
    const { ctx } = this;
    const rule = {
      "gm_t_id": {
        type: 'number',
        required: true,
      }
    }
    ctx.validate(rule, ctx.request.body)
    const gm_t_id = ctx.request.body.gm_t_id;
    delete ctx.request.body.gm_t_id
    const payload = {
      gm_t_id: gm_t_id,
      body: ctx.request.body,
      name: ctx.params.name
    } as ApiUpdateParams;
    const userInfo = await ctx.service.api.update(payload);
    ctx.body = ctx.helper.response(userInfo);
  }
  public async delete() {
    const { ctx } = this;
    const id = ctx.helper.toInt(ctx.params.id);
    const payload = {
      gm_t_id: id,
      name: ctx.params.name
    } as ApiUpdateParams;
    const res = await this.ctx.service.api.delete(payload);
    this.ctx.body = ctx.helper.response(res);
  }
  public async error() {
    const { ctx } = this;
    ctx.response.status = 401;
    ctx.body = ctx.helper.responseError({
      msg: 'error',
      code: 50001
    })
  }
}
