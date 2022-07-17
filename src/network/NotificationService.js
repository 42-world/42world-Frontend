import * as API from './APIType';

const notificationUrl = path => {
  return `${API.url('/notifications')}${path}`;
};

const NotificationService = {
  /**
   * **GET** Notifications
   * @returns {Promise<[{id: number,
   *  type: string,
   *  content: string,
   *  isRead: boolean,
   *  userId: number,
   *  createAt: Date,
   *  updateAt: Date}]>}\
   */
  getNotifications: async () => {
    const method = 'GET';
    const url = notificationUrl('');
    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      console.log('error');
    }
    return response.data;
  },
  /**
   * **PATCH** Read ALL Notifications
   */
  readAllNotifications: async () => {
    const method = 'PATCH';
    const url = notificationUrl('/readall');
    let response;
    try {
      response = await API.AXIOS({
        method,
        url,
      });
    } catch (error) {
      console.log('error');
    }
    return response.data;
  },
};

export default NotificationService;
