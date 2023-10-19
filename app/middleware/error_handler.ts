import { Context } from 'egg';

export default function errorHandler() {
    return async function (ctx: Context, next: () => Promise<any>) {
        try {
            await next();
        } catch (err:any) {
            ctx.status = err.status || 500;
            ctx.body = {
                code: ctx.status,
                message: err.message,
            };
        }
    };
}