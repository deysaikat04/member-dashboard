import { ReactNode } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { IMember } from "@constants/types/Member";

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
      <table className="border" aria-label="member-table" >
        <thead className="bg-gray-700 text-white h-10">
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
              <tr key={row.id} className="px-4 h-12 border even:bg-gray-100 odd:bg-white cursor-pointer  hover:bg-gray-200">
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
