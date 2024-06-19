import { IMember } from "@/constants/types/Member";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { ReactNode } from "react";


interface IMemberTable {
  data: IMember[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<IMember, any>[];
  handleMemberSelect:  (member: IMember) => void

}

const MemberTable = ({
  data,
  columns,
  handleMemberSelect
}: IMemberTable) => {

  const tanstackTable = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
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
                    {header.column.columnDef.header as ReactNode}
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
                    <td key={cell.id} onClick={() => handleMemberSelect(row.original)}>
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
    </div>
  );
};

export default MemberTable;
