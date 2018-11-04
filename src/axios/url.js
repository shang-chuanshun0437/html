/*
 * Email:519983770@qq.com
 */

//注册用的URL
export const GET_VERIFYCATION_CODE = "/user/getVerificationCode"; //获取验证码
export const REGISTER_URL = "/user/register"; //注册
export const LOGIN_URL = "/user/login"; //登录
//设备URL
export const DEVICE_MANAGE_URL = "/device/manage/queryDeviceList"; //获取管理的设备
export const DEVICE_UNMANAGE_URL = "/device/unManage/queryDeviceList"; //获取普通的设备
export const DEVICE_BIND_URL = "/user/device/bindDevice"; //添加设备
export const DEVICE_UNBIND_URL = "/user/device/unbindDevice"; //删除设备
export const DEVICE_MODIFY_NAME_URL = "/device/modify/deviceName"; //修改设备名称
export const DEVICE_BIND4USER_URL = "/user/device/bindDevice4User"; //为其他用户绑定设备