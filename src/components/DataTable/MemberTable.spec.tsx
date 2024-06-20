import { render, screen } from "@testing-library/react";
import MemberTable from "./MemberTable"

describe("MemberTable", () => {
  test("renders table", async () => {
    render(<MemberTable data={[]} columns={[]} handleMemberSelect={() => {}}/>);
    expect(screen.getByRole('table', { name: /member-table/i })).toBeInTheDocument();
  });

});