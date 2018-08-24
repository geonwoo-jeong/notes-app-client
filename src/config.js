require("dotenv").config();

export default {
  s3: {
    REGION: process.env.REGION,
    BUCKET: process.env.S3_BUCKET
  },
  apiGateway: {
    REGION: process.env.REGION,
    URL: process.env.API_GATEWAY_URL
  },
  cognito: {
    REGION: process.env.REGION,
    USER_POOL_ID: process.env.USER_POOL_ID,
    APP_CLIENT_ID: process.env.APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID
  }
};
