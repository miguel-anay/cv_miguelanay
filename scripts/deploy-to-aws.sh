#!/bin/bash

# Manual Deployment Script for Next.js to AWS S3 and CloudFront
# Usage: ./scripts/deploy-to-aws.sh

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
AWS_REGION="us-east-1"
S3_BUCKET_NAME="portfolio-miguel-anay"
CLOUDFRONT_DISTRIBUTION_ID="YOUR_DISTRIBUTION_ID"

echo -e "${GREEN}Starting deployment process...${NC}"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}AWS credentials are not configured. Run 'aws configure' first.${NC}"
    exit 1
fi

echo -e "${YELLOW}Building Next.js application...${NC}"
npm run build

if [ ! -d "./out" ]; then
    echo -e "${RED}Build failed. ./out directory not found.${NC}"
    exit 1
fi

echo -e "${GREEN}Build completed successfully!${NC}"
echo -e "${YELLOW}Deploying to S3 bucket: ${S3_BUCKET_NAME}${NC}"

# Sync static assets with long cache
aws s3 sync ./out s3://${S3_BUCKET_NAME} \
    --region ${AWS_REGION} \
    --delete \
    --cache-control "public,max-age=31536000,immutable" \
    --exclude "*.html" \
    --exclude "*.xml" \
    --exclude "*.txt"

# Sync HTML and metadata files with no cache
aws s3 sync ./out s3://${S3_BUCKET_NAME} \
    --region ${AWS_REGION} \
    --cache-control "public,max-age=0,must-revalidate" \
    --exclude "*" \
    --include "*.html" \
    --include "*.xml" \
    --include "*.txt" \
    --content-type "text/html; charset=utf-8"

echo -e "${GREEN}Files uploaded to S3 successfully!${NC}"
echo -e "${YELLOW}Creating CloudFront invalidation...${NC}"

INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

echo -e "${GREEN}CloudFront invalidation created: ${INVALIDATION_ID}${NC}"
echo -e "${YELLOW}Waiting for invalidation to complete (this may take a few minutes)...${NC}"

aws cloudfront wait invalidation-completed \
    --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} \
    --id ${INVALIDATION_ID}

echo -e "${GREEN}═══════════════════════════════════════════${NC}"
echo -e "${GREEN}  Deployment completed successfully! 🚀${NC}"
echo -e "${GREEN}═══════════════════════════════════════════${NC}"
echo -e "Website: ${YELLOW}https://portfolio.miguel-anay.nom.pe${NC}"
