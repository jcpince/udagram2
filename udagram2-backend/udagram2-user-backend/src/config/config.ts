export const config = {
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DATABASE,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_MEDIA_BUCKET,
  'user_api_port': process.env.USER_API_PORT,
  'app_url': process.env.APP_URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
