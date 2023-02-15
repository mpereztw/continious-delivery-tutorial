package test

import (
	"os"
	"testing"

	"github.com/gruntwork-io/terratest/modules/files"
	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/stretchr/testify/assert"
)

func Clean() {
	defer os.Remove("./test-provider.tf")
	defer os.Remove("./terraform.tfstate")
	defer os.Remove("./terraform.tfstate.backup")
	defer os.Remove("./.terraform.lock.hcl")
	defer os.RemoveAll("./.terraform")
}
func Setup() {
	files.CopyFile("../../test/artifacts/provider.tf", "./test-provider.tf")
}
func TestTerraformHelloWorldExample(t *testing.T) {
	t.Parallel()

	// Installl the provider.tf with defered deletion
	defer Clean()
	Setup()
	// Construct the terraform options with default retryable errors to handle the most common
	// retryable errors in terraform testing.
	terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
		// Set the path to the Terraform code that will be tested.
		TerraformDir: "./",
		Vars: map[string]interface{}{
			"bucket_name": "example-localstack-bucket",
		},
	})

	// Clean up resources with "terraform destroy" at the end of the test.
	defer terraform.Destroy(t, terraformOptions)

	// Run "terraform init" and "terraform apply". Fail the test if there are any errors.
	terraform.InitAndApply(t, terraformOptions)

	bucketUrl := terraform.Output(t, terraformOptions, "bucket_url")
	assert.Equal(t, "example-localstack-bucket.s3.amazonaws.com", bucketUrl)
}
