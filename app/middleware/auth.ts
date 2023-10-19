const assert = require('assert');

module.exports = (options, app) => {
  return async function (ctx, next) {
    // console.log(ctx.request.headers['egg_channel_id']);
    if (ctx.request.headers['egg_channel_id'] === 'gm') {
      await next();
    } else {
      ctx.response.status = 401;
      ctx.body = {
        code: 401,
        msg: 'token is invalid',
        data: []
      }
    }
  };
};