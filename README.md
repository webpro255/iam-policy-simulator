![Build Status](https://github.com/webpro255/iam-policy-simulator/actions/workflows/deploy.yml/badge.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![License](https://img.shields.io/github/license/webpro255/iam-policy-simulator)
![Last Commit](https://img.shields.io/github/last-commit/webpro255/iam-policy-simulator)
![Issues](https://img.shields.io/github/issues/webpro255/iam-policy-simulator)
![Watchers](https://img.shields.io/github/watchers/webpro255/iam-policy-simulator)


# IAM Policy Simulator

A web application to visualize AWS IAM policies as graphs.

## Features

- Visualize IAM policies as interactive graphs
- Zoom and pan functionality
- Tooltips with detailed information
- Search and highlight specific nodes
- Export graph as SVG image
- Legend to explain colors and shapes

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/webpro255/iam-policy-simulator.git
cd iam-policy-simulator
npm install
```
### Usage

**Start the server**:
```bash
node app.js
```
**Open your browser and go to** `http://localhost:3000`.
### Example IAM Policy
```bash
{
    "Version": "2024-06-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeInstances",
                "ec2:StartInstances",
                "ec2:StopInstances",
                "ec2:RebootInstances",
                "s3:ListBucket",
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject",
                "iam:ListUsers",
                "iam:GetUser",
                "iam:CreateUser",
                "iam:DeleteUser",
                "iam:UpdateUser",
                "iam:ListGroups",
                "iam:CreateGroup",
                "iam:DeleteGroup",
                "iam:AddUserToGroup",
                "iam:RemoveUserFromGroup",
                "iam:ListPolicies",
                "iam:AttachUserPolicy",
                "iam:DetachUserPolicy",
                "iam:CreatePolicy",
                "iam:DeletePolicy",
                "rds:DescribeDBInstances",
                "rds:StartDBInstance",
                "rds:StopDBInstance",
                "lambda:ListFunctions",
                "lambda:CreateFunction",
                "lambda:DeleteFunction",
                "lambda:InvokeFunction",
                "cloudwatch:PutMetricData",
                "cloudwatch:GetMetricData",
                "cloudwatch:DescribeAlarms",
                "cloudwatch:PutDashboard",
                "cloudtrail:DescribeTrails",
                "cloudtrail:StartLogging",
                "cloudtrail:StopLogging",
                "logs:CreateLogGroup",
                "logs:DeleteLogGroup",
                "logs:PutLogEvents",
                "logs:GetLogEvents",
                "logs:CreateLogStream",
                "logs:DeleteLogStream"
            ],
            "Resource": "*"
        }
    ]
}
```
### License
This project is licensed under the MIT License.
