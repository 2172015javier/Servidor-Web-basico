const {envs} = require("./config/env")
const {starServer} = require('./server/server')
const main = () => {
    starServer({
    port: envs.PORT,
    public_path: envs.public_path
  })
};
// funcion agnostica auto combocada
//agnostica por que no tiene nombre
// y auto combocada por que se ejecuta con los parentesis al final
(async () => {
  main();
})();
