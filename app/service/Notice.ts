import { Service } from 'egg';
import { CreateOptions, UpdateOptions } from 'sequelize';
import { Pagination } from '../../typings/app/common';


export class NoticeService extends Service {
  private baseTableName = 'notice'
  async query(params: Pagination) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, this.baseTableName)
    let model = await this.app.createTableIfNotExist(this, this.baseTableName, tableName)
    const res = await model.findAndCountAll({
      offset: params.offset,
      limit: params.limit,
      where: {
        isDelete: 0,
      },
      order: [['id', 'DESC']]
    });
    res.keyword = tableName;
    return res
  }
  async add(row: CreateOptions) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, this.baseTableName)
    let model = await this.app.createTableIfNotExist(this, this.baseTableName, tableName)
    const res =  await model.create(row)
    res.dataValues.keyword = tableName;
    return res;
    // return this.ctx.model.Notice.create(row);
  }
  async update(row: any) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, this.baseTableName)
    let model = await this.app.createTableIfNotExist(this, this.baseTableName, tableName)
    const noticeRow = await model.findByPk(row.id);
    if (!noticeRow) {
      throw new Error(`notice with ID ${row.id} not found`);
    }
    Object.entries(row).forEach(item => {
      noticeRow[item[0]] = item[1]
    })
    await noticeRow.save()
    noticeRow.dataValues.keyword = tableName
    return noticeRow;
  }
  async delete(id: number) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, this.baseTableName)
    let model = await this.app.createTableIfNotExist(this, this.baseTableName, tableName)
    const noticeRow = await model.findByPk(id);
    if (!noticeRow) {
      throw new Error(`notice with ID ${id} not found`);
    }
    await noticeRow.update({
      isDelete: 2,
      deletedAt: new Date(),
    })
    return {
      id,
      keyword:tableName
    };
  }
}

export default NoticeService;
