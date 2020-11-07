## Hello World

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nigelgoss_devops-helloworld&metric=alert_status)](https://sonarcloud.io/dashboard?id=nigelgoss_devops-helloworld)

### VS Code

### GitHub
* Branch protection rules

### SonarCloud
* **sonar-project.properties**  *SonarCloud configuration*

### CircleCI
* **AWS_ACCESS_KEY_ID** & **AWS_SECRET_ACCESS_KEY** & **AWS_SESSION_TOKEN**
* **.circleci/config.yml**

### Jest
* **package.json** *Node.js configuration*
* **jest.config.js** *Jest configuration*
* **__test__** *Folder to contain Jest tests*

### AWS - Elastic Beanstalk
* **.elasticbeanstalk/config.yml** *Elastic Beanstalk configuration*
* **.ebextensions/environment.config.main** *main branch PHP $_SERVER variables*
* **.ebextensions/environment.config.uat** *uat branch PHP $_SERVER variables*
* **.ebextensions/php.config** *Configure PHP within Elastic Beanstalk*
* **.ebignore** *Files to be excluded from deployment stage*
