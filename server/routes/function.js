const mssql = require("mssql");
const dbConfig = require("./config.js");

const executeQuery = async (query) => {
  try {
    await mssql.connect(dbConfig);
    const result = await mssql.query(query);
    // const result = await mssql.query(
    //   `EXEC [sp_alltran_load_record] 'VP','MAIN','00000001','d1'`
    // );
    // const result = await mssql.query('SELECT * FROM PowerQuery.dbo._ArD1')

    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

module.exports = executeQuery;
