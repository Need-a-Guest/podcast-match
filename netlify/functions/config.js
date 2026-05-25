exports.handler = async function(event) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      atToken: process.env.AIRTABLE_TOKEN,
      atBase:  process.env.AIRTABLE_BASE,
      acKey:   process.env.AC_KEY,
      acUrl:   process.env.AC_URL
    })
  };
};
