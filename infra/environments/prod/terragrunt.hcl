include {
  path = find_in_parent_folders()
}

generate "provider" {
  path      = "../../provider.tf"
  if_exists = "overwrite"
  contents = <<EOF
provider "aws" {
}
EOF
}