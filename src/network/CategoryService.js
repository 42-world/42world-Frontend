import * as API from "./APIType";

const categoryUrl = (path) => {
  return `${API.url("/categories")}${path}`;
};

const CategoryService = {
  /**
   * **GET** All Category Type
   * @returns {[{ \
   * id: number, \
   * name: string, \
   * createdAt: Date, \
   * updatedAt: Date}]}
   * category \
   * `200` : success \
   * `401` : fail
   */
  getCategories: async () => {
    const method = "GET";
    const url = categoryUrl("");

    return await API.AXIOS({
      method,
      url,
    });
  },
};

export default CategoryService;
