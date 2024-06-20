import { Skeleton } from "../ui/skeleton";

const MemberTableSkeleton = () => {
  return (
    <div className="justify-center flex flex-col md:mx-20 md:my-10">
      <div className="space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  )
}

export default MemberTableSkeleton;
