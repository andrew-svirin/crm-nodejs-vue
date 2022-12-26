namespace DataTable {
  export interface Body {
    readonly rows: {
      [key: string | number]: string,
    }[];
    readonly totalRows: number;
    readonly perPageRows: number;
    readonly page: number;
  }

  export interface Header {
    readonly columns: {
      readonly name: string;
      readonly label: string;
    }[];
  }
}

export default DataTable;

