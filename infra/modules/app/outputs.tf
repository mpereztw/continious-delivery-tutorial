output "base_url" {
  description = "Base URL for API Gateway stage."
  value = aws_api_gateway_deployment.example.invoke_url
}

output "rest_api_id" {
  description = "Base URL for API Gateway stage."
  value = aws_api_gateway_deployment.example.rest_api_id
}

output "stage_name" {
  value = aws_api_gateway_deployment.example.stage_name
}