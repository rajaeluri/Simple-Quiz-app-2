pipeline {
    agent any 
    stages { 
				stage('Clone Repository') {
						steps {  
								git url: 'https://your-repo-url/Simple-Quiz-app-2.git', branch: 'main' 
								} 
				} 
				stage('Build') { 
						steps {  
								echo 'Building the application...'  
						} 
				} 
				stage('Deploy') { 
						steps {  
								echo 'Starting the application on port 3000...'
								sh ''' 
								nohup java -jar target/your-app.jar --server.port=3000 > output.log 2>&1 & 
								''' 
						} 
				} 
				stage('Test') { 
						steps { 
								// Run tests if applicable 
								echo 'Running tests...' 
						} 
				} 
	} 
	post { 
			always { 
					echo 'Cleaning up...' 
					sh 'pkill -f "your-app.jar"' 
			} 
	} 
}
