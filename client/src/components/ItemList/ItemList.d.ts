export interface ItemList {
  updateItemsPage: (itemsPage: ItemsPage) => void;
}

export interface ItemsPage {
  readonly rows: {
    [key: number]: string,
  }[];
  readonly totalRows: number;
  readonly perPageRows: number;
  readonly page: number;
}
