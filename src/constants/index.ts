import { createColumnHelper } from "@tanstack/react-table";
import { IMember } from "./types/Member";

export const MEMBER_TABLE_COLUMN_NAMES = ["first_name", "last_name", "user_email", "available_points", "loyalty_enroll_time"];

export const MEMBER_TABLE_PAGE_LIMIT = 100;

const columnHelper = createColumnHelper<IMember>()
export const columns = [    
  columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
    header: 'Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('user_email', {
    header: 'Email',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('available_points', {
    header: 'Available points',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('loyalty_enroll_time', {
    header: 'Loyalty enroll time',
    cell: (info) => info.getValue()
  }),
]
