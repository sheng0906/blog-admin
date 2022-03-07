/**
 * api接口统一管理
 */
import { get, post } from './request';

export const login = async (user) => {
  let res = await post('/auth/login', user);
  return res;
};
