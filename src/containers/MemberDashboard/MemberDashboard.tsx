import useMembers from "@/hooks/useMembers";
import MemberTable from "@/components/DataTable/MemberTable";
import {  columns } from "@/constants";
import { MemberPagination } from "@/components/Pagination/MemberPagination";
import { useState } from "react";


const MemberDashboard = () => {
  
  const [currentPage, setCurrentPage] = useState(0);

  const { data: membersData, isLoading } = useMembers(currentPage);

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
          }}
        />
        <MemberPagination totalCount={membersData.data.total_loyalty_users} currentPage={currentPage} onPageChange={setCurrentPage}/>
        </>
      ) : null}

      
    </div>
  );
};

export default MemberDashboard;
