require("dotenv").config();

export default {
  s3: {
    REGION: REGION,
    BUCKET: S3_BUCKET
  },
  apiGateway: {
    REGION: REGION,
    URL: API_GATEWAY_URL
  },
  cognito: {
    REGION: REGION,
    USER_POOL_ID: USER_POOL_ID,
    APP_CLIENT_ID: APP_CLIENT_ID,
    IDENTITY_POOL_ID: IDENTITY_POOL_ID
  }
};
