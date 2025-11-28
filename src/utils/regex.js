

const RegexParten = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[1-9]\d{9,14}$/,
  username: /^[a-zA-Z0-9_]{3,16}$/
};

export const normalizeEmail = (email) =>
  email.trim().toLowerCase();

export const isValidEmail = (email) =>
  REGEX.email.test(normalizeEmail(email));

