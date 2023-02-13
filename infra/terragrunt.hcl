generate "provider" {
  path      = "./provider.tf"
  if_exists = "overwrite"
  contents = <<EOF


%{ if get_env("IS_TEST", false) }
provider "aws" {
    skip_credentials_validation = true
    skip_metadata_api_check     = true
    s3_force_path_style         = true
    access_key                  = "mock_access_key"
    secret_key                  = "mock_secret_key"
    endpoints {
        dynamodb     = "http://localhost:4569"
        lambda       = "http://localhost:4574"
    }
}
  %{ else }
provider "aws" {
}
  %{ endif }
EOF
}