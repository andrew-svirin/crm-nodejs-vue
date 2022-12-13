export interface RequestOptions {
  authorized?: boolean,
}

export interface Response extends Promise<any> {
  data: any,
}
