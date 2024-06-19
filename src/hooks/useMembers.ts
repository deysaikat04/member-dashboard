import { useQuery } from "react-query";
import apiService from "../utils/apiService";
import { IGetAllUserApiResponse } from "@/constants/types/Member";
import { MEMBER_TABLE_PAGE_LIMIT as limit } from "@/constants";

const useMembers = (
  startIndex: number,
) => {
  return useQuery<IGetAllUserApiResponse>(["Members", limit], () =>
    apiService
      .get(
        `/v1/loyalty/users?count=${limit}&start_index=${startIndex}`
      )
      .then((res) => res.data)
      .catch((error) => console.error(error))
  );
}

export default useMembers;