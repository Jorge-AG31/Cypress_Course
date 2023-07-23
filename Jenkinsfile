pipeline{
    agent any

    tools {nodejs "node"}

    stages{
        stage('Cypress Parallel Test Suite'){
            parallel {
                stage('Slave 1'){
                    agent{
                        label "Agent_1_1"
                    }
                    steps{
                        git url: "https://github.com/JorgeAx31/Cypress.git"
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key fc295b57-d375-4c7d-885f-1c25561bdb22 --parallel'
                        
                    }
                }

                stage('Slave 2'){
                    agent{
                        label "Agent_1_2"
                    }
                    steps{
                        git url: "https://github.com/JorgeAx31/Cypress.git"
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key fc295b57-d375-4c7d-885f-1c25561bdb22 --parallel'
                        
                    }
                }

                stage('Slave 3'){
                    agent{
                        label "Agent_1_3"
                    }
                    steps{
                        git url: "https://github.com/JorgeAx31/Cypress.git"
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key fc295b57-d375-4c7d-885f-1c25561bdb22 --parallel'
                        
                    }
                }
            }
        }
    }
}