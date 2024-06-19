import {
  Pagination,
  PaginationContent,
  PaginationLink,
} from "@/components/ui/pagination";
import { MEMBER_TABLE_PAGE_LIMIT as limit } from "@/constants";
import { ChevronRight, ChevronsLeft } from "lucide-react";
import { useState } from "react";
interface PaginationProp {
  totalCount: number;
  onPageChange: () => void;
  stepsBeforeAfterCount?: number;
  customClass?: string;
}

export const MemberPagination = ({
  totalCount,
  onPageChange,
  stepsBeforeAfterCount = 2,
}: PaginationProp) => {
  const itemsPerPage = limit;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startPage = Math.max(1, currentPage - stepsBeforeAfterCount);
  const endPage = Math.min(totalPages, currentPage + stepsBeforeAfterCount);
  const noOfPage = Math.ceil(totalCount / limit);

  const getPageNumbers = () => {
    const pages = [];

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageNumberClick = (pageNumber: string | number) => {
    typeof pageNumber === "string"
      ? setCurrentPage(parseInt(pageNumber))
      : setCurrentPage(pageNumber);
    onPageChange();
    console.log("pageNumber",pageNumber);
    
  };

  const renderPagination = () => {
    const pageNumbers = getPageNumbers();

    return (
      <>
        <Pagination>
          {currentPage > 1 && <ChevronsLeft />}
          {pageNumbers.map((pageNumber, index) => (
            <PaginationContent
              key={index}
              className={pageNumber === "..." ? "ellipsis" : ""}
            >
              {pageNumber === "..." ? (
                pageNumber
              ) : (
                <PaginationLink
                  isActive={currentPage === pageNumber}
                  onClick={() => handlePageNumberClick(pageNumber)}
                  className="h-7 w-9 p-0"
                >
                  {pageNumber}
                </PaginationLink>
              )}
            </PaginationContent>
          ))}
          {endPage < noOfPage ? <ChevronRight /> : null}
        </Pagination>
      </>
    );
  };

  return <div>{renderPagination()}</div>;
};
