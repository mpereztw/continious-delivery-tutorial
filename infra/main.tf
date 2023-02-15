terraform {
}

module "app" {
    source = "./modules/app"
    source_dir = "${path.root}/.."
}

output "base_url" {
    value = module.app.base_url
}