const data = {
  1: {
    name: "1",
    mobile: "1111",
    username: "",
    password: ""
  },
  2: {
    name: "2",
    mobile: "2222",
    username: "",
    password: ""
  }
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getDetail = id => delay(500).then(() => data[id]);
