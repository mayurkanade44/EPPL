require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appGtLYDf2nNsBQP5")
  .table("services");

exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: "No product with the id",
        };
      }
      return {
        headers: { "Access-Control-Allow-Origin": "*" },
        statusCode: 200,
        body: JSON.stringify(product),
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
