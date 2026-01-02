variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket for website hosting"
  type        = string
  default     = "portfolio-miguel-anay"
}

variable "domain_name" {
  description = "Domain name for the website"
  type        = string
  default     = "portfolio.miguel-anay.nom.pe"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "cloudfront_price_class" {
  description = "CloudFront price class"
  type        = string
  default     = "PriceClass_100"
}
