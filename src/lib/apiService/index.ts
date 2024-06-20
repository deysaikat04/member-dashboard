import axios from "axios";
import {
  API_KEY,
  PARTNER_ID,
} from "../../constants/env.constants";

const apiHeaders = {
  "partner-id": PARTNER_ID,
  "api-key": API_KEY,
};

export default axios.create({
  headers: apiHeaders,
});
