import ajax from "./ajax";

const BASE_URL = "/api";

// 获取地址
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`);

// 获取分类
export const reqCategorys = () => ajax(BASE_URL + "/index_category");

// 获取商品
export const reqShops = (longitude, latitude) => ajax(BASE_URL + "/shops", { longitude, latitude });

// 获取手机验证码
export const reqSendCode = phone => ajax(BASE_URL + "/sendcode", { phone });

// 密码登录
export const reqLoginPsw = ({ name, pwd, captcha }) => ajax(BASE_URL + "/login_pwd", { name, pwd, captcha }, "POST");

// 验证码登录
export const reqLoginMsg = ({ phone, code }) => ajax(BASE_URL + "/login_sms", { phone, code }, "POST");

// 搜索
export const reqSearch = ({ keyword, geohash }) => ajax(BASE_URL + "/search_shops", { keyword, geohash });


// 获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + "/userinfo");