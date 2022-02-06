const express = require('express')
const executeQuery = require("./function")
const router = express.Router();

const routes = () => {
  router.get("/get", async (req, res) => {
  const result = await  executeQuery(`EXEC [sp_alltran_load_record] 'VP','MAIN','00000001','d1'`);
  res.send(result)
  });

  return router;
};

module.exports = routes
