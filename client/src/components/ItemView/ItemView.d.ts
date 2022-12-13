declare namespace ItemView {
  export interface Data {
    readonly rows: {
      [key: string]: string | number | undefined,
    };
  }

  export interface Header {
    readonly columns: {
      [key: string]: string,
    };
  }
}

export default ItemView;
