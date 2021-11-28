export const VALIDATIONREGEX = {
  name: /^[a-zA-Z0-9]*$/,
  email: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
};

export const LOGINREGEX = {
  name: /^[a-zA-Z0-9]*$/,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
};
