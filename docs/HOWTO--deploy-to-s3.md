# How to Deploy to Amazon S3

1. (Install AWS CLI)[https://docs.aws.amazon.com/cli/latest/userguide/installing.html].
2. `npm run build`
3. `export PROD=1; export PUBLIC_ROOT="https://s3.amazonaws.com/{bucket-name}/js/"`
4. `aws s3 cp ./build s3://{bucket-name}/js/ --exclude "*.html" --acl public-read --recursive`
