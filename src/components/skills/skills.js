import React from "react";
import "./skills.css";
import ReactIcon from "../../assets/react.png";
import Angular from "../../assets/angular.png";
import Javascript from "../../assets/javascript.png";
import Typescript from "../../assets/typescript.png";
import SCSS from "../../assets/scss.png";
import Java from "../../assets/java.png";
import C from "../../assets/c++.png";
import Postgre from "../../assets/postgre.png";
import MySQL from "../../assets/mysql.png";
import Git from "../../assets/git.png";
import Jira from "../../assets/jira.png";
import SpringBoot from "../../assets/spring.png";
import HTML from "../../assets/html.png";
import Lambda from "../../assets/lambda.png";
import S3 from "../../assets/s3.png";
import DynamoDB from "../../assets/dynamodb.png";
import APIGateway from "../../assets/apigateway.png";
import EventBridge from "../../assets/eventbridge.png";
import SNS from "../../assets/sns.png";
import SQS from "../../assets/sqs.png";
import SFN from "../../assets/sfn.png";
import Fargate from "../../assets/fargate.png";
import EC2 from "../../assets/ec2.png";
import ECS from "../../assets/ecs.png";
import ECR from "../../assets/ecr.png";
import CloudShell from "../../assets/cloudshell.png";
import CloudWatch from "../../assets/cloudwatch.png";
import CloudTrail from "../../assets/cloudtrail.png";
import TransferFamily from "../../assets/transfer.png";
import Route53 from "../../assets/route53.png";
import VPC from "../../assets/vpc.png";
import IAM from "../../assets/iam.png";
import KMS from "../../assets/kms.png";
import Secrets from "../../assets/secrets.png";
import EFS from "../../assets/efs.png";
import AWS from "../../assets/aws.png";
import Python from "../../assets/python.png";
import Node from "../../assets/node.png";
import Splunk from "../../assets/splunk.png";
import Shell from "../../assets/shell.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="title">Technologies & Skills</span>
      <p className="frontend-text">Frontend technologies</p>
      <div className="grid frontend-grid">
        <div className="block">
          <img src={ReactIcon} alt="React Logo" className="block-img" />
          <p className="label">ReactJS</p>
        </div>
        <div className="block">
          <img src={Angular} alt="Angular Logo" className="block-img" />
          <p className="label">Angular</p>
        </div>
        <div className="block">
          <img src={Javascript} alt="Javascript Logo" className="block-img" />
          <p className="label">JavaScript</p>
        </div>
        <div className="block">
          <img src={Typescript} alt="Typescript Logo" className="block-img" />
          <p className="label">TypeScript</p>
        </div>
        <div className="block">
          <img src={SCSS} alt="SCSS Logo" className="block-img" />
          <p className="label">SCSS</p>
        </div>
        <div className="block">
          <img src={HTML} alt="HTML Logo" className="block-img" />
          <p className="label">HTML</p>
        </div>
      </div>
      <p className="backend-text">Backend/Other technologies</p>
      <div className="grid backend-grid">
        <div className="block">
          <img src={AWS} alt="AWS Logo" className="block-img" />
          <p className="label">AWS</p>
        </div>
        <div className="block">
          <img src={Python} alt="Python Logo" className="block-img" />
          <p className="label">Python</p>
        </div>
        <div className="block">
          <img src={Node} alt="Node Logo" className="block-img" />
          <p className="label">Node.js</p>
        </div>
        <div className="block">
          <img src={Shell} alt="Shell Logo" className="block-img" />
          <p className="label">Shell</p>
        </div>
        <div className="block">
          <img src={Java} alt="Java Logo" className="block-img" />
          <p className="label">Java</p>
        </div>
        <div className="block">
          <img src={C} alt="C++ Logo" className="block-img" />
          <p className="label">C++</p>
        </div>
        <div className="block">
          <img src={Postgre} alt="PostgreSQL Logo" className="block-img" />
          <p className="label">PostgreSQL</p>
        </div>
        <div className="block">
          <img src={MySQL} alt="MySQL Logo" className="block-img" />
          <p className="label">MySQL</p>
        </div>
        <div className="block">
          <img src={SpringBoot} alt="Spring Boot Logo" className="block-img" />
          <p className="label">Spring Boot</p>
        </div>
        <div className="block">
          <img src={Git} alt="Git Logo" className="block-img" />
          <p className="label">Git</p>
        </div>
        <div className="block">
          <img src={Jira} alt="Jira Logo" className="block-img" />
          <p className="label">Jira</p>
        </div>
        <div className="block">
          <img src={Splunk} alt="Splunk Logo" className="block-img" />
          <p className="label">Splunk</p>
        </div>
      </div>
      <p className="backend-text">AWS Services</p>
      <div className="grid backend-grid">
        <div className="block">
          <img src={APIGateway} alt="API Gateway Logo" className="block-img" />
          <p className="label">API Gateway</p>
        </div>
        <div className="block">
          <img src={CloudShell} alt="CloudShell Logo" className="block-img" />
          <p className="label">CloudShell</p>
        </div>
        <div className="block">
          <img src={CloudTrail} alt="CloudTrail Logo" className="block-img" />
          <p className="label">CloudTrail</p>
        </div>
        <div className="block">
          <img src={CloudWatch} alt="CloudWatch Logo" className="block-img" />
          <p className="label">CloudWatch</p>
        </div>
        <div className="block">
          <img src={DynamoDB} alt="DynamoDB Logo" className="block-img" />
          <p className="label">DynamoDB</p>
        </div>
        <div className="block">
          <img src={EC2} alt="EC2 Logo" className="block-img" />
          <p className="label">EC2</p>
        </div>
        <div className="block">
          <img src={ECR} alt="ECR Logo" className="block-img" />
          <p className="label">ECR</p>
        </div>
        <div className="block">
          <img src={ECS} alt="ECS Logo" className="block-img" />
          <p className="label">ECS</p>
        </div>
        <div className="block">
          <img src={EFS} alt="EFS Logo" className="block-img" />
          <p className="label">EFS</p>
        </div>
        <div className="block">
          <img src={EventBridge} alt="EventBridge Logo" className="block-img" />
          <p className="label">EventBridge</p>
        </div>
        <div className="block">
          <img src={Fargate} alt="Fargate Logo" className="block-img" />
          <p className="label">Fargate</p>
        </div>
        <div className="block">
          <img src={IAM} alt="IAM Logo" className="block-img" />
          <p className="label">IAM</p>
        </div>
        <div className="block">
          <img src={KMS} alt="KMS Logo" className="block-img" />
          <p className="label">KMS</p>
        </div>
        <div className="block">
          <img src={Lambda} alt="Lambda Logo" className="block-img" />
          <p className="label">Lambda</p>
        </div>
        <div className="block">
          <img src={Route53} alt="Route53 Logo" className="block-img" />
          <p className="label">Route53</p>
        </div>
        <div className="block">
          <img src={S3} alt="S3 Logo" className="block-img" />
          <p className="label">S3</p>
        </div>
        <div className="block">
          <img src={Secrets} alt="Secrets Manager Logo" className="block-img" />
          <p className="label">Secrets Manager</p>
        </div>
        <div className="block">
          <img src={SNS} alt="SNS Logo" className="block-img" />
          <p className="label">SNS</p>
        </div>
        <div className="block">
          <img src={SQS} alt="SQS Logo" className="block-img" />
          <p className="label">SQS</p>
        </div>
        <div className="block">
          <img src={SFN} alt="Step Functions Logo" className="block-img" />
          <p className="label">Step Functions</p>
        </div>
        <div className="block">
          <img
            src={TransferFamily}
            alt="Transfer Family Logo"
            className="block-img"
          />
          <p className="label">Transfer Family</p>
        </div>
        <div className="block">
          <img src={VPC} alt="VPC Logo" className="block-img" />
          <p className="label">VPC</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
