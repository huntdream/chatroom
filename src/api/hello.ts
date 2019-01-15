import request from "../utils/request";

export const greeting = (name: string, age: number): any => {
  return request({
    url: `/hello`,
    params: {
      name,
      age,
    },
  });
};
