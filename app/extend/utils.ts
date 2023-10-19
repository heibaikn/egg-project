export function response(data: any) {
  return {
    msg: 'ok',
    code: 200,
    data,
  }
}

export function responseError(data: any) {
  return {
    msg: data.msg,
    code: data.code
  }
}


export function omitEmpty(fields: string[], data: any) {
  fields.forEach(name => {
    if (data[name] === '') {
      delete data[name]
    }
  })
  return data;
}

export function toInt(str:any) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

// export function undersource2