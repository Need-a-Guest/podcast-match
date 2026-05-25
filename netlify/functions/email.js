exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const payload = JSON.parse(event.body);
    const acUrl = process.env.AC_URL;
    const acKey = process.env.AC_KEY;
    const res = await fetch("https://" + acUrl + "/api/3/message/send", {
      method: "POST",
      headers: { "Api-Token": acKey, "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    return {
      statusCode: res.status,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: text
    };
  } catch(e) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: e.message })
    };
  }
};
