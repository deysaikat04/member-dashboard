import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
} from "@/components/ui/pagination";
import { MEMBER_TABLE_PAGE_LIMIT as limit } from "@/constants/member";

interface PaginationProp {
  totalCount: number;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  stepsBeforeAfterCount?: number;
  customClass?: string;
}

const MemberPagination = ({
  totalCount,
  currentPage,
  onPageChange,
  stepsBeforeAfterCount = 2,
}: PaginationProp) => {
  const itemsPerPage = limit;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
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
      ? onPageChange(parseInt(pageNumber))
      : onPageChange(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = getPageNumbers();

    return (
      <>
        <Pagination className="my-4">
          {currentPage > 1 && (
            <ChevronLeft
              className="h-7 w-7 border rounded  ml-2 cursor-pointer hover:bg-slate-200"
              onClick={() => handlePageNumberClick(currentPage - 1)}
            />
          )}
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
                  className={`h-7 w-9 p-0  mx-1 cursor-pointer ${
                    currentPage === pageNumber
                      ? "bg-gray-700 text-white p-2"
                      : ""
                  }`}
                >
                  {pageNumber}
                </PaginationLink>
              )}
            </PaginationContent>
          ))}
          {endPage < noOfPage ? (
            <ChevronRight
              className="h-7 w-7 border rounded  ml-2 cursor-pointer hover:bg-slate-200"
              onClick={() => handlePageNumberClick(currentPage + 1)}
            />
          ) : null}
        </Pagination>
      </>
    );
  };

  return <div>{renderPagination()}</div>;
};

export default MemberPagination;
