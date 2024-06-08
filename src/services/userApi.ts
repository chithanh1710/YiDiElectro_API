import { propsSignIn } from "../interface/propsSignIn";

const url = "https://todoappbe-598e.onrender.com";

export const createUserApi = (data: propsSignIn) => {
  const newUser = {
    email: data.email,
    password: data.password,
    username: data.username,
  };
  return fetch(`${url}/user`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "fail") {
        throw new Error(data.message);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const checkUserApi = (data: propsSignIn) => {
  return fetch(`${url}/user?email=${data.email}&password=${data.password}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "fail") {
        throw new Error(data.message);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
