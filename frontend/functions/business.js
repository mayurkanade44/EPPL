require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appGtLYDf2nNsBQP5")
  .table("business");

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list({ maxRecords: 200 });
    const services = records.map((service) => {
      const { id } = service;
      const { name, navbar, featured } = service.fields;
      const img = navbar[0].url;
      return {
        id,
        name,
        img,
        featured,
      };
    });
    return {
      headers: { "Access-Control-Allow-Origin": "*" },
      statusCode: 200,
      body: JSON.stringify(services),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server error",
    };
  }
};
