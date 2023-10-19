import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.redirect('/', '/news');
  router.get('/api/:name', controller.api.query);
  router.get('/api/:name/:id', controller.api.queryInfo);
  router.post('/api/:name', controller.api.add);
  router.put('/api/:name', controller.api.edit);
  router.delete('/api/:name/:id', controller.api.delete);
  router.get('/news', controller.news.list);
  // router.get('/news1', controller.news.list);
  router.get('/news_total', controller.news.total);
  router.get('/notice', controller.notice.query);
  router.post('/notice', controller.notice.add);
  router.put('/notice', controller.notice.edit);
  router.delete('/notice/:id', controller.notice.delete);
  router.get('/notice/error', controller.notice.error);
  router.get('/news/item/:id', controller.news.detail);
  router.get('/news/user/:id', controller.news.user);
};
