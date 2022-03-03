//userStore.js
// 导入 pinia
import { defineStore } from 'pinia';

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const userStore = defineStore({
    // id：必须的，保证在Store中唯一
    id: 'userStore',
    // state：返回对象的函数
    state: () => ({
        id: '001',
        name: '张三',
        i:0,
    })
});
