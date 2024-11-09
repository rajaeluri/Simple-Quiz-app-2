pipeline { 
    agent any 
    stages { 
        stage('Checkout') { 
            steps { 
                git 'https://github.com/your-repo/Simple-Quiz-app-2.git' 
            } 
        } 
        stage('Build') { 
            steps {    
                sh 'javac -d out src/**/*.java' 
            } 
        } 
        stage('Deploy') { 
            steps {  
                sh 'java -cp out com.yourpackage.MainClass' 
            } 
        } 
    } 
}
