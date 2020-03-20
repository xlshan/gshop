import ajax from "./ajax";

const BASE_URL = "/api";

// 获取地址
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`);

// 获取分类
export const reqCategorys = () => ajax(BASE_URL + "/index_category");

// 获取商品
export const reqShops = (longitude, latitude) => ajax(BASE_URL + "/shops", { longitude, latitude });