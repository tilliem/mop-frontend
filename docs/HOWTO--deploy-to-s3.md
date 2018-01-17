# How to Deploy to Amazon S3

1. [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html).
2. `export PROD=1; export PUBLIC_ROOT="https://s3.{region}.amazonaws.com/{bucket-name}/js/"`
3. `npm run build`
4. `aws s3 cp ./build s3://{bucket-name}/js/ --exclude "*.html" --acl public-read --recursive`

Note that to achieve https, you may NOT use the PUBLIC_ROOT version that is
{bucket-name}.s3-website-{region}.amazonaws.com or other vanity names, or https will not work.