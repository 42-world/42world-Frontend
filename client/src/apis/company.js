import axios from "../../node_modules/axios/index";
import { Instance } from "./index";

export const getCompanyListFamous = async () => {
  try {
    const { data } = await Instance.get("/company/list/famous");
    return data;
  } catch (error) {
    console.log(error);
  }
};
