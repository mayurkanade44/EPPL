require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appGtLYDf2nNsBQP5")
  .table("products");

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const business = await airtable.retrieve(id);
      if (business.error) {
        return {
          statusCode: 404,
          body: "No business with the id",
        };
      }
      return {
        headers: { "Access-Control-Allow-Origin": "*" },
        statusCode: 200,
        body: JSON.stringify(business),
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: "Server error",
      };
    }
  }
  return {
    statusCode: 500,
    body: "Provide proper id",
  };
};
