//context.js : 전역적으로 상태를 공유할 수 있도록 도와주는 도구
import { createContext } from "react";

let login = { userid: "홍길동", isLogin: true };

export const LoginContext = createContext(login);
