import { useMemo, useState } from "react";
// TODO: remove mock data
import data from "./data.json";
import { ColumnDef, PaginationState } from "@tanstack/react-table";
import { MEMBER_TABLE_COLUMN_NAMES } from "../../constants";
import { IMember } from "../../constants/types/Member";
import MemberTable from "../../components/DataTable/MemberTable";

const MemberDashboard = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const generateColumnsForTable = (): ColumnDef<IMember, any>[] =>
    MEMBER_TABLE_COLUMN_NAMES.map((name) => {
      return {
        accessorKey: name,
        header:
          name.replace(/_/g, " ").charAt(0).toUpperCase() +
          name.replace(/_/g, " ").slice(1),
        cell: (cellContext) => cellContext.getValue(),
      };
    });

  const columns = useMemo(() => generateColumnsForTable(), []);

  return (
    <div className="text-center">
      <h4>MemberDashboard</h4>
      <MemberTable
        {...{
          data: data.data.loyalty_users,
          columns,
          pagination,
          total_pages: 10,
          setPagination,
        }}
      />
    </div>
  );
};

export default MemberDashboard;
