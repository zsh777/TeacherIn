import api from "../utils/axios";
export const user = (params) =>
  api({
    url: "/user/user.json",
    method: "get",
    params: params,
  });
export const get1655 = (params) =>
  api({
    url: "/repositories/1655.json",
    method: "get",
    params: params,
  });
export const starred = (params) =>
  api({
    url: "/user/starred/1655.json",
    method: "get",
    params: params,
  });
export const getContents = (params) =>
  api({
    url: "/repos/7/1655/contents.json",
    method: "get",
    params: params,
  });
export const getContents1 = (params) =>
  api({
    url: "/repos/7/1655/contents1.json",
    method: "get",
    params: params,
  });
export const getContents2 = (params) =>
  api({
    url: "/repos/7/1655/contents2.json",
    method: "get",
    params: params,
  });
export const getContents123 = (params) =>
  api({
    url: "/user/starred/123.json",
    method: "get",
    params: params,
  });
