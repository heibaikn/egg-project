import { Controller } from 'egg';
import { Pagination } from '../../typings/app/common';

export default class NewsController extends Controller {
  public async list() {
    const { ctx } = this;
    const params = {
      offset: Number.parseInt(ctx.query?.from || '1') - 1,
      limit: Number.parseInt(ctx.query?.size || '20')
    } as Pagination;

    const data = new Array(params.limit).fill(1).map((item, key) => {
      let id = params.offset * params.limit + key + 1;
      return {
        "desc": `desc-${id}`,
        "goods": [
          {
            "item_id": 2,
            "item_num": 1
          }
        ],
        "id": id,
        "interval": 1,
        "is_open": 0,
        "name": `name-${id}`,
        "player_max_num": 1
      }
    })
    ctx.body = ctx.helper.response({
      "list": data,
      "total": 5000
    })
  }
  public async total() {
    const { ctx } = this;
    let size = Number.parseInt(ctx.query?.size || '5000')
    let data = new Array(size).fill(1).map((item, key) => {
      let id = key + 1;
      return {
        "id": id,
        "desc": `desc-${id}`,
        "name": `name-${id}`,
      }
    })
    if (ctx.query?.search) {
      data = data.filter((item) => {
        return `${item.id}`.includes(ctx.query.search)
      })
    }
    ctx.body = ctx.helper.response({
      "list": data,
      "total": size
    })
  }

  public async detail() {
    const { ctx } = this;
    const id = ctx.params.id;
    const newsInfo = await ctx.service.news.getItem(id);
    // get comment parallel
    const commentList = await Promise.all(newsInfo.kids.map(_id => ctx.service.news.getItem(_id)));
    await ctx.render('news/detail.tpl', { item: newsInfo, comments: commentList });
  }

  public async user() {
    const { ctx } = this;
    const id = ctx.params.id;
    const userInfo = await ctx.service.news.getUser(id);
    await ctx.render('news/user.tpl', { user: userInfo });
  }
}
