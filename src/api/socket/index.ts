// 统一管理文章详情
import request from "@/utils/request";
enum API {
    // 获取用户聊天记录
    REQ_USER_INFO = '/my/article/reqUsreInfo',
    // 获取用户信息
    REQ_USER_DATA_LIST = '/my/article/RoomUserInfo'
}
// 获取用户聊天记录
export const reqUsreInfo = () => request.get(API.REQ_USER_INFO)
// 获取用户信息
export const reqUserData = () => request.get(API.REQ_USER_DATA_LIST)