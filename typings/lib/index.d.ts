import { CreateOptions, UpdateOptions } from 'sequelize';

export interface Pagination {
  offset: number,
  limit: number
}

export interface ApiQueryParams extends Pagination {
  name: string
}
export interface ApiQueryInfoParams  {
  name: string,
  id:string
}


export interface ApiAddParams extends CreateOptions {
  name: string,
  body: any
}

export interface ApiUpdateParams extends CreateOptions {
  gm_t_id: number,
  name: string,
  body: any
}

