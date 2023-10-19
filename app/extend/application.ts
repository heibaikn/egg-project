
export default {
  async createTableIfNotExist(_this, base: string, tableName: string) {
    let tableModel
    switch (base) {
      case 'notice': {
        tableModel = require('../model/notice')
        break;
      }
      case 'api': {
        tableModel = require('../model/api')
        break;
      }
      default:
    }
    if (tableModel) {
      tableModel(_this.ctx, _this.model, tableName)
      await _this.ctx.model.sync({ force: false })
      return _this.ctx.model.models[tableName]
    }
  },
  generateTableName(header, base: string) {
    const subArr = ['appid', 'x-gmaster-environment-id'].map(key => header[key]&& header[key].slice(-8)).filter(val => val)
    if (subArr.length) {
      return `gm_${subArr.join('_')}_${base}`
    } else {
      return `gm_${base}`
    }
  }

}