import useMembers from "@/hooks/useMembers";
import MemberTable from "@/components/DataTable/MemberTable";
import { columns } from "@/constants";
import { MemberPagination } from "@/components/Pagination/MemberPagination";
import { useState } from "react";
import { IMember } from "@/constants/types/Member";
import MemberDetails from "@/components/MemberDetails/MemberDetails";

const MemberDashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedUser, setSelectedUser] = useState<IMember>();
  const [sheetOpen, setSheetOpen] = useState(false);

  const { data: membersData, isLoading } = useMembers(currentPage);

  const handleMemberSelect = (member: IMember) => {
    setSelectedUser(member);
    setSheetOpen(true);
  };

  return (
    <div className="text-center">
      <h4>MemberDashboard</h4>
      {isLoading ? (
        <h3>Loading ... </h3>
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
      ) : null}

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
