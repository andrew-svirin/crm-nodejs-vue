import type DataTable from '@/components/DataTable/DataTable.d';
import type { ItemsPage } from '@/components/ItemList/ItemList.d';

export default {
  /**
   * Normalize table body.
   * Filter rows columns by existing in table headers.
   * @param tableBody
   * @param tableHeaders
   */
  itemsPageToTableBody (tableBody: ItemsPage, tableHeaders: DataTable.Header): DataTable.Body {
    const headerNames = tableHeaders.columns.map(item => item.name);

    const {rows, totalRows, perPageRows, page} = tableBody;

    const normalizedRows = rows?.map((row: Record<number, any>) => {
      const keys = Object.keys(row).filter(key => headerNames.includes(key));

      return keys.reduce((obj: Record<number, any>, key: string) => {
        obj[key] = row[key];

        return obj;
      }, {});
    });

    return {rows: normalizedRows, totalRows, perPageRows, page};
  }
};
