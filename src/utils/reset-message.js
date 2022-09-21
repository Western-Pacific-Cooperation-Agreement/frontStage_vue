// reset-message.js
import { Message } from 'element-ui'
// 避免出现多个报错信息弹窗
let messageInstance = null
const resetMessage = (options) => {
  if (messageInstance) {
    // 先把第一条信息关闭，在弹出第二条信息
    messageInstance.close()
  }
  messageInstance = Message(options)
}

// 重新定义 message.success 等 4个方法
['error', 'success', 'info', 'warning'].forEach(type => {
  resetMessage[type] = options => {
    options = {
      type: type,
      message: options
    }
    return resetMessage(options)
  }
})

export const message = resetMessage
