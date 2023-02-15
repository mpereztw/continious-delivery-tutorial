output "bucket_url" {
  value = aws_s3_bucket.example_bucket.bucket_domain_name
}