import rs from "randomstring";

const ACCESS_TOKEN_SECRET = rs.generate(64);
const REFRESH_TOKEN_SECRET = rs.generate(64);

console.log("ACCESS_TOKEN_SECRET=" + ACCESS_TOKEN_SECRET);
console.log("REFRESH_TOKEN_SECRET=" + REFRESH_TOKEN_SECRET);
