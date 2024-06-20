import { useState } from "react";
import useMembers from "@/hooks/useMembers";
import MemberTable from "@/components/DataTable/MemberTable";
import MemberPagination from "@/components/Pagination/MemberPagination";
import MemberDetails from "@/components/MemberDetails/MemberDetails";
import MemberTableSkeleton from "@/components/Skeleton/MemberTableSkeleton";
import { IMember } from "@/constants/types/Member";
import { columns } from "@/constants/member";

const MemberDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<IMember>();
  const [sheetOpen, setSheetOpen] = useState(false);

  const { data: membersData, isLoading, isError } = useMembers(currentPage);

  const handleMemberSelect = (member: IMember) => {
    setSelectedUser(member);
    setSheetOpen(true);
  };

  return (
    <div className="text-center">
      <h4 className="text-2xl font-semibold">Member Dashboard</h4>
      <div className="grid grid-cols-12 gap-4">
        <div className="m-4 col-span-12 md:col-start-2 md:col-span-10 overflow-x-auto">
          {isLoading ? (
            <MemberTableSkeleton />
          ) : isError ? (
            <p className="text-red-600">
              Error while fetching member details. Try again later.
            </p>
          ) : membersData?.data?.loyalty_users ? (
            <>
              <MemberTable
                {...{
                  data: membersData.data.loyalty_users,
                  columns,
                  handleMemberSelect,
                }}
              />
              <MemberPagination
                totalCount={membersData.data.total_loyalty_users}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <p>Something went wrong. Try again later.</p>
          )}
        </div>
      </div>

      {selectedUser ? (
        <MemberDetails
          member={selectedUser}
          open={sheetOpen}
          setSheetOpen={setSheetOpen}
        />
      ) : null}
    </div>
  );
};

export default MemberDashboard;
