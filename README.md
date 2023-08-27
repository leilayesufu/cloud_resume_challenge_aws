<h3>My serverless resume website with a view counter using AWS. Built to partake in <a href="https://aws.amazon.com/developer/community/heroes/forrest-brazeal">Forrest Brazeal's</a> Cloud Resume <a href="https://cloudresumechallenge.dev/instructions/">Challenge</a>.</h3> 
<h4><i>The full details on my solution can be found on my<a href="https://leilayesufu.hashnode.dev/aws-cloud-resume-challenge"> Blog</a></i></h4>
<h4><i>Live website <a href="https://resume.leilayesufu.uno/">here</a></i></h4>
This <a href="https://cloudresumechallenge.dev/instructions/">16-step challenge</a> requires the creation of a website to showcase my resume with a site view counter. It dives deeper by requiring the use of AWS Lambda, API Gateway, and DynamoDB to operate the view counter, host the site on an S3 bucket, and have the site delivered over HTTPS using CloudFront.

## Architecture
![users (1)](https://github.com/leilayesufu/cloud_resume_challenge_aws/assets/78659709/fa15f90d-d268-416d-b85a-4739dc01a15f)


**Services Used**:
- S3
- AWS CloudFront
- Certificate Manager
- AWS Lambda
- Dynamo DB
- GitHub Actions
- Terraform
- Route 53





## Builds Provisioning:
This project makes use of github actions workflow to automatically provision all the resources for the website on AWS
on a code change to the default branch on this repo.  



