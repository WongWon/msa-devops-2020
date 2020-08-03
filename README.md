# Number Fact App

API Used: http://numbersapi.com

Website Link: http://dwonnumberfacts.azurewebsites.net/

A basic web app where the user inputs a number and displays a trivia fact relating to that number.

# Build Pipeline Implementation
The build pipeline is a series of instructions run on an Ubuntu-based agent to compile and build my project found in this repository. It is triggered by commits to either the master branch or the develop branch. This is different to the release pipeline which is only triggered by commits to the master branch. This means that I am able to continue developing my React App and am able to choose which features I want to push to the live website by simply merging them into the master branch. Once a trigger has been activated, the pipeline will then install Node.js and be built using a script task. The script task simply installs the required packages and builds the React App into a "build" folder. The finished build is archived into a zip folder which will then be used as a build artifact for the release pipeline to access.

# Release Pipeline Implementation
Using the latest build artifact created by the build pipeline, the artifact will be deployed and a new release will be created. As a continuous deployment trigger was used, it means that the pipeline will only trigger when commits are made to the master branch. This means that I am able to develop my React App in the develop branch and can choose which features to push to release by simply merging them into the master branch. 



*Note Had trouble creating a nested folder so I created a new repo. Old repository with commits are at https://github.com/WongWon/number-app*


 
