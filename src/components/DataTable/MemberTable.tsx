import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  PaginationState,
  ColumnDef,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { SetStateAction } from "react";
import { IMember } from "../../constants/types/Member";

interface IMemberTable {
  data: IMember[];
  columns: ColumnDef<IMember, any>[];
  pagination: PaginationState;
  total_pages: number;
  setPagination: React.Dispatch<SetStateAction<PaginationState>>;
}

const MemberTable = ({
  data,
  columns,
  pagination,
  total_pages,
  setPagination,
}: IMemberTable) => {
  console.log(pagination);

  const tanstackTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    pageCount: total_pages,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    debugTable: true,
  });

  return (
    <div className="justify-center flex flex-col md:mx-20 md:my-10">
      <table className="border p-4">
        <thead>
          {tanstackTable.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan} className="px-4">
                    {header.column.columnDef.header}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {tanstackTable.getRowModel()?.rows.map((row) => {
            return (
              <tr key={row.id} className="px-4">
                {row.getVisibleCells()?.map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex flex-row justify-center">
        <button
          onClick={() => tanstackTable.setPageIndex(0)}
          disabled={!tanstackTable.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          onClick={() => tanstackTable.previousPage()}
          disabled={!tanstackTable.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <div className="pagination-text">
          {tanstackTable.getState().pagination.pageIndex + 1} of{" "}
          {tanstackTable.getPageCount()}
        </div>
        <button
          onClick={() => tanstackTable.nextPage()}
          disabled={!tanstackTable.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          onClick={() =>
            tanstackTable.setPageIndex(tanstackTable.getPageCount() - 1)
          }
          disabled={!tanstackTable.getCanNextPage()}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default MemberTable;
