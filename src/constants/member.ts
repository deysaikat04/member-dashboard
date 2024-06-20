import { createColumnHelper } from "@tanstack/react-table";
import { IMember } from "./types/Member";

export const MEMBER_TABLE_COLUMN_NAMES = [
  "first_name",
  "last_name",
  "user_email",
  "available_points",
  "loyalty_enroll_time",
];

export const MEMBER_TABLE_PAGE_LIMIT = 100;

export const MEMBER_PROFILE_DETAILS_SHEET_ROWS = [
  "first_name",
  "user_email",
  "loyalty_enroll_time",
  "address_line1",
  "dob",
  "available_points",
  "loyalty_tier_name",
  "redeemed_points",
  "awarded_points",
] as (keyof IMember)[];

const columnHelper = createColumnHelper<IMember>();
export const columns = [
  columnHelper.accessor((row) => `${row.first_name} ${row.last_name}`, {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("user_email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("available_points", {
    header: "Available points",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("loyalty_enroll_time", {
    header: "Loyalty enroll time",
    cell: (info) => info.getValue(),
  }),
];
