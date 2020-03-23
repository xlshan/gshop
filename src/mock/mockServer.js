import Mock from "mockjs";
import mockData from "./data.json";

// 返回goods的接口
Mock.mock("/goods", { code: 0, data: mockData.goods });
// 返回ratings的接口
Mock.mock("/ratings", { code: 0, data: mockData.ratings });
// 返回info的接口
Mock.mock("/info", { code: 0, data: mockData.info });

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可