import { IMemberDetailsProps } from "@/constants/types/Member";
import { Label } from "../ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { MEMBER_PROFILE_DETAILS_SHEET_ROWS } from "@/constants";

const MemberDetails = ({ member, open, setSheetOpen }: IMemberDetailsProps) => {

  const renderDetailsJsx = () => {
    return MEMBER_PROFILE_DETAILS_SHEET_ROWS.map((row) => {
      if (row.includes("name")) {
        return (
          <>
            <div className="grid grid-cols-4  gap-4" key={row}>
              <Label htmlFor="name" className="text-right leading-5">
                {row.replace(/_/g, " ").charAt(0).toUpperCase() +
                  row.replace(/_/g, " ").slice(1)}
              </Label>
              <Label
                htmlFor="name"
                className="text-left col-span-3 font-normal leading-5"
              >
                {member.first_name} {member.last_name}
              </Label>
            </div>
            <hr />
          </>
        );
      } else if (row.includes("address")) {
        return (
          <>
            <div className="grid grid-cols-4  gap-4" key={row}>
              <Label htmlFor="name" className="text-right leading-5">
                Address
              </Label>
              <Label
                htmlFor="name"
                className="text-left col-span-3 font-normal leading-5"
              >
                {member.address_line1}
                {member.address_line2}
                {member.city}
                {member.state}
                {member.country}
                {member.zipcode}
              </Label>
            </div>
            <hr />
          </>
        );
      } else {
        return (
          <>
            <div className="grid grid-cols-4 gap-4" key={row}>
              <Label htmlFor="name" className="text-right leading-5">
                {row.replace(/_/g, " ").charAt(0).toUpperCase() +
                  row.replace(/_/g, " ").slice(1)}
              </Label>
              <Label
                htmlFor="name"
                className="text-left col-span-3 font-normal leading-5"
              >
                {member[row]}
              </Label>
            </div>
            <hr />
          </>
        );
      }
    });
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      <Sheet
        key={"right"}
        open={open}
        onOpenChange={() => {
          setSheetOpen(false);
        }}
      >
        <SheetContent side={"right"} className="">
          <SheetHeader>
            <SheetTitle>Member details</SheetTitle>
            <SheetDescription>
              Please find the member details below:
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">{renderDetailsJsx()}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MemberDetails;
