import * as API from "./APIType";

const userUrl = (path) => {
  return `${API.url("/users")}${path}`;
};

const UserService = {
  /**
   * **GET** Signed in User Information
   * @returns {Promise<{
   * id: number,
   * nickname: string,
   * oauthToken: string,
   * isAuthenticated: boolean,
   * lastLogin: Date,
   * role: CADET,
   * character: 5,
   * deletedAt: Date,
   * createdAt: Date,
   * updatedAt: Date }>}
   * user \
   * `200` : success \
   * `401` : fail
   */
  getUser: async () => {
    const method = "GET";
    const url = userUrl("/me");

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      return {
        data: null,
        state: error.response.status,
      };
    }
    return {
      data: response.data,
      state: 200,
    };
  },
  /**
   * **DELETE** Signed in User
   * @returns
   * `200` : success \
   * `401` : fail
   */
  deleteUser: async () => {
    const method = "DELETE";
    const url = userUrl("");

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **GET** User Information by ID
   * @param {string} id
   * @returns {{ \
   * id: number, \
   * nickname: string, \
   * oauthToken: string, \
   * isAuthenticated: boolean, \
   * lastLogin: Date, \
   * role: CADET, \
   * character: 5, \
   * deletedAt: Date, \
   * createdAt: Date, \
   * updatedAt: Date }} \
   * user \
   * `200` : success \
   * `401` : fail
   */
  getUserById: async (id) => {
    const method = "GET";
    const url = userUrl(`/profile/${id}`);

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **GET** User Notification
   * @returns {[{ \
   * id: number, \
   * type: NEW_COMMENT, \
   * content: string, \
   * isRead: boolean, \
   * userId: number, \
   * createdAt: Date, \
   * updatedAt: Date }]} \
   *  notification
   * `200` : success \
   * `401` : fail
   */
  getNotification: async () => {
    const method = "GET";
    const url = userUrl("/notification");

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **UPDATE** User Notification Status (read all notification)
   * @returns
   * `200` : success \
   * `401` : fail
   */
  updateNotificationStatus: async () => {
    const method = "PUT";
    const url = userUrl("/notification/readall");

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  /**
   * **UPDATE** Signed in User Profile
   * @param {{ nickname: string,character: number}} changedProfile
   * @returns {{ \
   * id: number, \
   * nickname: string, \
   * oauthToken: string, \
   * isAuthenticated: boolean, \
   * lastLogin: Date, \
   * role: CADET, \
   * character: 5, \
   * deletedAt: Date, \
   * createdAt: Date, \
   * updatedAt: Date }} \
   * user \
   * `200` : success \
   * `401` : fail
   */
  updateUser: async (changedProfile) => {
    const method = "PUT";
    const url = userUrl("/");
    const body = changedProfile;

    let response;
    try {
      response = await API.AXIOS({
        method,
        data: body,
        url,
      });
    } catch (error) {
      alert(error);
    }
    return response.data;
  },
  // 내 글, 내 댓글, 좋아요한 글 불러오기 추가
  getLikeArticles: async (page) => {
    const method = "GET";
    const url = userUrl("/me/like-articles");
    const params = { page };

    let response;
    try {
      response = await API.AXIOS({
        params,
        method,
        url,
      });
    } catch (error) {
      console.log("service : ", error);
    }
    return response.data;
  },
  getMyArticles: async (page) => {
    const method = "GET";
    const url = userUrl("/me/articles");
    const params = { page };

    let response;
    try {
      response = await API.AXIOS({
        params,
        method,
        url,
      });
    } catch (error) {
      console.log("service : ", error);
    }
    return response.data;
  },
  getMyComments: async (page) => {
    const method = "GET";
    const url = userUrl("/me/comments");
    const params = { page };

    let response;
    try {
      response = await API.AXIOS({
        params,
        method,
        url,
      });
    } catch (error) {
      console.log("service : ", error);
    }
    return response.data;
  },
  getNoviceProfile: async () => {
    const method = "GET";
    const url = userUrl("/profile");

    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
      console.log(response);
    } catch (error) {
      console.log("service : ", error);
    }
    return response.data;
  },
};

export default UserService;
