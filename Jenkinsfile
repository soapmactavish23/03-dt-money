pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        TOMCAT_WEBAPPS = '/usr/local/tomcat/webapps'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'prod', 
                    url: 'https://github.com/soapmactavish23/03-dt-money',
                    credentialsId: 'GitHub-PAT'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'yarn install'
                sh 'yarn build'
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                    rm -rf $TOMCAT_WEBAPPS/dt-money
                    mkdir -p $TOMCAT_WEBAPPS/dt-money
                    cp -r dist/* $TOMCAT_WEBAPPS/dt-money/
                '''
            }
        }
    }
}
