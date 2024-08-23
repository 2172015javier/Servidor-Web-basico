// const {envs} = require("./config/env");
import { envs } from "./config/env.js";
// const { starServer } = require("./server/server");
import { starServer } from "./server/server.js";
const main = () => {
  starServer({
    port: envs.PORT,
    public_path: envs.public_path,
  });
};
// funcion agnostica auto combocada
//agnostica por que no tiene nombre
// y auto combocada por que se ejecuta con los parentesis al final
(async () => {
    main();
})();
