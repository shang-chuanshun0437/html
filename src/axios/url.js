/*
 * Email:519983770@qq.com
 */

//注册用的URL
export const GET_VERIFYCATION_CODE = "/user/getVerificationCode"; //获取验证码
export const REGISTER_URL = "/user/register"; //注册
export const LOGIN_URL = "/user/login"; //登录
//设备管理员URL
export const DEVICE_MANAGE_URL = "/device/manage/queryDeviceList"; //获取管理的设备
export const DEVICE_UNMANAGE_URL = "/device/unManage/queryDeviceList"; //获取普通的设备
export const DEVICE_BIND_URL = "/user/device/bindDevice"; //添加设备
export const DEVICE_UNBIND_URL = "/user/device/unbindDevice"; //删除设备
export const DEVICE_MODIFY_NAME_URL = "/device/modify/deviceName"; //修改设备名称
export const DEVICE_BIND4USER_URL = "/user/device/bindDevice4User"; //为其他用户绑定设备
export const DEVICE_UNBIND4USER_URL = "/user/device/unbindDevice4User"; //设备管理员解绑其他用户的设备
export const MODIFY_EXPIRE_URL = "/user/device/modify/user"; //设备管理员修改用户的有效期

//用户设备
export const DEVICE_USER_URL = "/user/device/manage/queryUserList"; //查询管理员设备下的所有用户

//账户
export const ACCOUNT_INFO_URL = "/user/query/userInfo"; //查询账户详情
export const ACCOUNT_UPDATE_URL = "/user/updateUser"; //查询账户详情
export const MODIFY_PWD_URL = "/user/modifyPassword"; //修改账户的密码
