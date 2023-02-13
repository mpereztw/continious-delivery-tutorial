locals {
  is_test = true
}

provider "${local.provider}" {
  if is_test {
    alias = "aws"
    region = "${var.region}"
  } else if local.provider == "azure" {
    alias = "azurerm"
    version = "~> 2.0"
  } else if local.provider == "gcp" {
    alias = "google"
    region = "${var.region}"
  }
}