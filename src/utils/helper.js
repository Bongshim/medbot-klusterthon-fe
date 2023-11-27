import { notification } from "antd"


/**
 * openNotificationWithIcon
 * @param {string} type
 * @param {string} message
 * @param {string} description
 * @returns {*}
 */
export const openNotificationWithIcon = (
  type,
  message,
  description
) => {
  switch (type) {
    case 'success':
      notification.success({
        message,
        description,
      })
      break
    case 'info':
      notification.info({
        message,
        description,
      })
      break
    case 'warning':
      notification.warning({
        message,
        description,
      })
      break
    case 'error':
      notification.warning({
        message,
        description,
      })
      break
    default:
      break
  }
}


export const formattedDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};