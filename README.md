## Hello World

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nigelgoss_devops-helloworld&metric=alert_status)](https://sonarcloud.io/dashboard?id=nigelgoss_devops-helloworld)

### AWS - Cloud 9
* git clone https://github.com/nigelgoss/SysDev-HelloWorld.git
* cd SysDev-HelloWorld
* git add .
* git commit commit -m "Cloud9"
* git push

### GitHub
* Branch protection rules

### SonarCloud
* **sonar-project.properties**  *SonarCloud configuration*

### CircleCI
* **AWS_ACCESS_KEY_ID** & **AWS_SECRET_ACCESS_KEY** & **AWS_SESSION_TOKEN**
* **.circleci/config.yml**

### Node.js
* **package.json** *Node.js package configuration*

### Jest
* **jest.config.js** *Jest configuration*
* **\_\_tests\_\_** *Folder to contain Jest tests*

### AWS - Elastic Beanstalk
* **.elasticbeanstalk/config.yml** *Elastic Beanstalk configuration*
* **.ebextensions/environment.config.main** *main branch PHP $_SERVER variables*
* **.ebextensions/environment.config.uat** *uat branch PHP $_SERVER variables*
* **.ebextensions/php.config** *Configure PHP within Elastic Beanstalk*
* **.ebignore** *Files to be excluded from deployment stage*
