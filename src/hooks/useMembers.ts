import { useQuery } from "react-query";
import apiService from "../lib/apiService";
import { IGetAllUserApiResponse } from "@/constants/types/Member";
import { MEMBER_TABLE_PAGE_LIMIT as limit } from "@/constants/member";

const useMembers = (startIndex: number) => {
  return useQuery<IGetAllUserApiResponse>(["Members", startIndex], () =>
    apiService
      .get(
        `/v1/loyalty/users?count=${limit}&start_index=${
          (startIndex - 1) * limit
        }`
      )
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      })
  );
};

export default useMembers;
