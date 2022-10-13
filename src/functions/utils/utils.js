const SHA256 = require("crypto-js/sha256");

const SECRET_KEY_FOR_PASSWORD_HASH =
  process.env.SECRET_KEY_FOR_PASSWORD_HASH ||
  "vQDpARUGJU1bL5oP4jlNOmqCrpMpNzXA";

class Generator {
  constructor() {
    this.mixstrings = Array.from(SECRET_KEY_FOR_PASSWORD_HASH);
  }
  count = 0;
  next() {
    if (this.count >= this.mixstrings.length) Error();
    const res = this.mixstrings[this.count];
    this.count += 1;
    return res;
  }
}

const insertSalt = (str, user_id, domain) => {
  return `${str}:${user_id}:${domain}`;
};

const insertPepper = (str) => {
  const gen = new Generator();
  const pwh = [];
  for (let i in str) {
    pwh.push(str[i] + gen.next());
  }
  return pwh.join("");
};

const encryptSha256 = (str) => {
  const hash = SHA256(str);
  return hash.toString();
};

const insertStretch = (str) => {
  return encryptSha256(str);
};

exports.encryptSha256Safe = (str, user_id, domain) => {
  let temp = str;
  temp = insertSalt(temp, user_id, domain);
  temp = insertPepper(temp);
  temp = encryptSha256(temp);
  temp = insertStretch(temp);
  return temp;
};

exports.JWTSecret =
  process.env.JET_SECRET || "6lN0CLISbEGHNCN80ZtMfzFPCmUE5UaF";

exports.btoa = function (str) {
  let buffer;
  if (Buffer.isBuffer(str)) {
    buffer = str;
  } else {
    buffer = new Buffer(str.toString(), "binary");
  }

  return buffer.toString("base64");
};
