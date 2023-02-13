include {
    path = find_in_parent_folders()
}

inputs = {
  is_test = true
}

terraform {
    source = "../../src"
}