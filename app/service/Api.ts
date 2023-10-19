import { Service } from 'egg';
import { CreateOptions, UpdateOptions } from 'sequelize';
import { Pagination } from '../../typings/app/common';
import { ApiAddParams } from '../../typings/lib';


export class NoticeService extends Service {
  private baseTableName = 'api'
  async query(params: any) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, `${this.baseTableName}_${params.name}`)
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
  async queryInfo(params: any) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, `${this.baseTableName}_${params.name}`)
    let model = await this.app.createTableIfNotExist(this, this.baseTableName, tableName)
    const res = await model.findByPk(params.id);
    // Object.entries(row).forEach(item => {
    //   noticeRow[item[0]] = item[1]
    // })
    res.keyword = tableName;
    return res
  }
  async add(row: ApiAddParams) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, `${this.baseTableName}_${row.name}`)
    let model = await this.app.createTableIfNotExist(this, this.baseTableName, tableName)
    const res = await model.create(row)
    res.dataValues.keyword = tableName;
    return res;
    // return this.ctx.model.Notice.create(row);
  }
  async update(row: any) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, `${this.baseTableName}_${row.name}`)
    let model = await this.app.createTableIfNotExist(this, this.baseTableName, tableName)
    const noticeRow = await model.findByPk(row.gm_t_id);
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
  async delete(row: any) {
    const { ctx } = this;
    const tableName = this.app.generateTableName(ctx.header, `${this.baseTableName}_${row.name}`)
    let model = await this.app.createTableIfNotExist(this, this.baseTableName, tableName)
    const noticeRow = await model.findByPk(row.gm_t_id);
    if (!noticeRow) {
      throw new Error(`notice with ID ${row.gm_t_id} not found`);
    }
    await noticeRow.update({
      isDelete: 2,
      deletedAt: new Date(),
    })
    return {
      id: row.gm_t_id,
      keyword: tableName
    };
  }
}

export default NoticeService;
