# AWS S3 and CloudFront Deployment Guide
# Next.js Portfolio - Miguel Anay

This guide provides comprehensive instructions for deploying your Next.js portfolio to AWS S3 with CloudFront CDN.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [AWS Infrastructure Setup](#aws-infrastructure-setup)
3. [GitHub Actions Setup](#github-actions-setup)
4. [Manual Deployment](#manual-deployment)
5. [Domain Configuration](#domain-configuration)
6. [Troubleshooting](#troubleshooting)
7. [Performance Optimization](#performance-optimization)
8. [Cost Estimation](#cost-estimation)

---

## Prerequisites

### Required Tools
- **AWS Account** with billing enabled
- **AWS CLI** v2.x installed and configured
- **Node.js** 20.x or higher
- **GitHub** account (for CI/CD)
- **Domain** (portfolio.miguel-anay.nom.pe)

### AWS CLI Installation

**Windows:**
```powershell
# Using winget
winget install Amazon.AWSCLI
```

**macOS:**
```bash
brew install awscli
```

**Linux:**
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

### Configure AWS CLI
```bash
aws configure
# AWS Access Key ID: YOUR_ACCESS_KEY
# AWS Secret Access Key: YOUR_SECRET_KEY
# Default region name: us-east-1
# Default output format: json
```

---

## AWS Infrastructure Setup

### Option 1: Terraform (Recommended)

#### Step 1: Install Terraform
```bash
# Windows (chocolatey)
choco install terraform

# macOS
brew install terraform

# Linux
wget https://releases.hashicorp.com/terraform/1.7.0/terraform_1.7.0_linux_amd64.zip
unzip terraform_1.7.0_linux_amd64.zip
sudo mv terraform /usr/local/bin/
```

#### Step 2: Initialize and Apply Terraform

```bash
cd infrastructure/terraform

# Initialize Terraform
terraform init

# Review the execution plan
terraform plan

# Apply the configuration
terraform apply

# Note the outputs
```

#### Step 3: Update DNS Records
After Terraform creates your CloudFront distribution:

```
Type: CNAME
Name: portfolio
Value: [cloudfront_domain_name from terraform output]
TTL: 300
```

---

### Option 2: Manual AWS Console Setup

#### Step 1: Create S3 Bucket

1. **Go to S3 Console:** https://s3.console.aws.amazon.com
2. **Create Bucket:**
   - Bucket name: `portfolio-miguel-anay`
   - Region: `us-east-1`
   - Block all public access: **ENABLED**
   - Bucket Versioning: **Enable**
   - Encryption: **Enable** (SSE-S3)

3. **Configure Static Website Hosting:**
   - Properties tab → Static website hosting
   - Enable: **Enable**
   - Index document: `index.html`
   - Error document: `404.html`

#### Step 2: Create CloudFront Distribution

1. **Go to CloudFront Console:** https://console.aws.amazon.com/cloudfront
2. **Create Distribution:**

   **Origin Settings:**
   - Origin domain: Select your S3 bucket
   - Origin access: **Origin access control settings**
   - Create new OAC

   **Default Cache Behavior:**
   - Viewer protocol policy: **Redirect HTTP to HTTPS**
   - Allowed HTTP methods: **GET, HEAD, OPTIONS**
   - Compress objects automatically: **Yes**

   **Settings:**
   - Alternate domain names: `portfolio.miguel-anay.nom.pe`
   - Custom SSL certificate: **Request certificate**
   - Default root object: `index.html`

#### Step 3: Request SSL Certificate (ACM)

1. **Go to Certificate Manager:** https://console.aws.amazon.com/acm
2. **IMPORTANT:** Switch to **US East (N. Virginia) us-east-1**
3. **Request Certificate:**
   - Domain names: `portfolio.miguel-anay.nom.pe`, `www.portfolio.miguel-anay.nom.pe`
   - Validation method: **DNS validation**
4. **Create DNS Records** for validation
5. **Wait for validation** (5-30 minutes)

#### Step 4: Create IAM User for GitHub Actions

1. **Go to IAM Console:** https://console.aws.amazon.com/iam
2. **Create User:**
   - User name: `github-actions-deploy`
   - Access type: **Programmatic access**
3. **Attach Policy:**
   - Use the policy from `infrastructure/iam-policy.json`
   - Update bucket name in the policy
4. **Save Access Keys**

---

## GitHub Actions Setup

### Step 1: Add GitHub Secrets

Navigate to: **Settings → Secrets and variables → Actions**

Add these secrets:
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
S3_BUCKET_NAME
CLOUDFRONT_DISTRIBUTION_ID
```

### Step 2: Enable GitHub Actions

1. **Settings → Actions → General**
2. Set **Workflow permissions** to "Read and write permissions"
3. Save

### Step 3: Test Deployment

```bash
git add .
git commit -m "Deploy to AWS"
git push origin main
```

---

## Manual Deployment

### Using the Deployment Script

```bash
# Update script variables in scripts/deploy-to-aws.sh
# S3_BUCKET_NAME and CLOUDFRONT_DISTRIBUTION_ID

# Run deployment (Git Bash on Windows)
bash scripts/deploy-to-aws.sh
```

### Using AWS CLI Directly

```bash
# Build
npm run build

# Sync static assets
aws s3 sync ./out s3://portfolio-miguel-anay \
  --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "*.html"

# Sync HTML files
aws s3 sync ./out s3://portfolio-miguel-anay \
  --cache-control "public,max-age=0,must-revalidate" \
  --exclude "*" \
  --include "*.html"

# Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

---

## Domain Configuration

### DNS Settings

```
Type: CNAME
Name: portfolio
Value: [your-cloudfront-domain].cloudfront.net
TTL: 300
```

### Verify DNS

```bash
nslookup portfolio.miguel-anay.nom.pe
curl -I https://portfolio.miguel-anay.nom.pe
```

---

## Troubleshooting

### Issue: 403 Forbidden Error

**Solution:**
1. Check S3 bucket policy allows CloudFront OAI access
2. Verify CloudFront origin configuration
3. Ensure files exist in S3

```bash
aws s3 ls s3://portfolio-miguel-anay --recursive
```

### Issue: CSS/JS Not Loading

**Solution:**
1. Check browser console for CORS errors
2. Verify CloudFront cache behaviors
3. Clear CloudFront cache

```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Issue: Build Fails

**Solution:**
```bash
# Test build locally
npm run build

# Check Node version
node --version
```

---

## Performance Optimization

### Cache Headers Strategy

- **Static Assets:** 1 year cache
- **HTML Files:** No cache (immediate updates)

### Compression
- Enable gzip/brotli in CloudFront
- Reduces transfer size by 60-80%

### Monitoring

```bash
# CloudWatch metrics
aws cloudwatch get-metric-statistics \
  --namespace AWS/CloudFront \
  --metric-name Requests \
  --dimensions Name=DistributionId,Value=YOUR_DIST_ID \
  --start-time 2026-01-01T00:00:00Z \
  --end-time 2026-01-02T00:00:00Z \
  --period 3600 \
  --statistics Sum
```

---

## Cost Estimation

### Monthly Cost (10,000 page views)

| Service | Cost |
|---------|------|
| S3 Storage | $0.02 |
| S3 Requests | $0.01 |
| CloudFront Data Transfer | $1.00 |
| CloudFront Requests | $0.01 |
| Route 53 | $0.50 |
| ACM Certificate | **FREE** |
| **Total** | **~$1.50-2.00/month** |

### Cost Optimization

1. Use appropriate CloudFront Price Class
2. Monitor S3 storage with lifecycle policies
3. Limit CloudFront invalidations
4. Set up billing alerts

---

## Security Best Practices

### S3 Bucket
- Block all public access
- Enable versioning
- Enable encryption
- Use CloudFront OAI

### CloudFront
- HTTPS only
- TLS 1.2 minimum
- Security headers

### IAM
- Least privilege policies
- Rotate keys every 90 days
- Enable MFA

---

## Maintenance Tasks

**Monthly:**
- Review CloudWatch metrics
- Check AWS costs
- Update dependencies

**Quarterly:**
- Optimize cache hit ratio
- Rotate IAM keys
- Run Lighthouse audits

**Annually:**
- Review CloudFront price class
- Archive old S3 versions

---

## Additional Resources

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [AWS CloudFront Guide](https://docs.aws.amazon.com/cloudfront/)
- [AWS S3 Static Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

---

**Last Updated:** 2026-01-02
**Maintained by:** Miguel Anay
