# Algorithm-Visualizer
Algorithm visualization illustrates how algorithms and Advance data structure work in a
graphical way. It mainly aims to simplify and deepen the understanding of algorithm opera-
tion.Using professional articles of algorithms, animations, and responsive design , each algo-
rithm can be learnt easily, Helps students identify their strengths and areas for improvement,
Revisit topics multiple times and practice.Every software engineer should have a good un-
derstanding of Algorithms to develop efficient software. Visualizers have a good history of
providing effective understanding to the users.

## Group Members

 - [@Vikas Chaurasiya](https://github.com/vikas-348)
 - [@Mukesh Gupta](https://github.com/mukesh2001)
 - [@Ashly John](https://github.com/ADJ46)
 - [@Himanshu Chaurasiya](https://github.com/Himanshuchaurasiya1234)
### Are you a first-timer in contributing to open source? These guidelines from GitHub might help!

## Running Locally
1. Create a New_Folder and clone Alogorithm-visualizer and Server within New_Folder.
2. Fork this repository.

3. Clone your forked repo to your New_Folder (Alogorithm-visualizer).

    ```bash
    git clone https://github.com/<your-username>/algorithm-visualizer.git    
    ```
 4. Install dependencies, and run the web app.

    ```bash
    cd algorithm-visualizer
    npm install
    npm uninstall -g sass
    npm i node-sass@4.14.0
    npm start
    ```
  5.  Clone your forked repo to your New_Folder (Server).
      ```bash
      git clone https://github.com/<your-username>/algorithm-visualizer.git   
      ```

 
    
  6. Create `.env.local` in your Server project root:
      ```bash
      # By putting dummy values, GitHub sign in will not work locally
      GITHUB_CLIENT_ID = dummy
      GITHUB_CLIENT_SECRET = dummy

      # By putting dummy values, extracting visualizing commands will not work locally (except for JavaScript).
      AWS_ACCESS_KEY_ID = dummy
      AWS_SECRET_ACCESS_KEY = dummy
       ```
  7. Install dependencies, and run the Server.
     ```bash
     npm install
     npm run watch
     ```
  8.To begin, visit https://algorithm-visualizer.org/ and navigate to the algorithm section. Select the specific algorithm you wish to visualize. Once you have chosen an algorithm, copy and paste its corresponding code into the provided "code.js" box on the left side of the page. Next, click on the "build" button to initiate the visualization process. Finally, click on the "play" button to start the visualization of the selected algorithm.   
## Project Screenshots
**Home Page:**
It gives a general Information regarding to the website and users have to login or Signup to access the Website.

![Home Page](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/Screenshot/ss1.png)

![Home Page](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/Screenshot/ss2.png)

**Sign Up page:** 
There are two user’s option while signing up. One is for Student’s and one is for Teacher’s. 

![Main Page](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/Screenshot/ss3.png)

- Both the user’s have to fill a form based on their category. User can register by giving their Name, Username, Email, and Password. All this data will be stored in the database.

  ![User Data](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/Screenshot/ss4.png)

**Login page:**
Already registered users can login directly with their username and password to access the website. 

![Login Page](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/Screenshot/ss5.png)

**Student Page:**
For a login through a student’s account the following are the different functions/options provided. A student can access them based on their requirements.

![Student Page](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/Screenshot/ss6.png)

**Teacher Page:** 
For a login through a Teacher’s account the following are the different functions/options provided. A Teacher can access them based on their requirements.

![Teacher Page](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/Screenshot/ss7.png)

## System Requirements

**Hardware requirements:**

    •	Processor: Dual Core or higher

    •	Hard Drive: 500 GB or higher

    •	RAM: 2GB or higher

    •	Internet Connection: Preferred 1Mbps or higher

**Software requirements:**

    •	Front-End Design: HTML, CSS, JavaScript

    •	Back-End & Database: Django(Python), PostgreSQL

    •	Operating System: Windows 7 or higher

    •	Editor Tools: Pycharm 

    •	Web Browser: Google Chrome 

## Conclusion:

- The goal of the project is to create a user friendly website and help E-learning/ virtual learning by making it easy and efficient for students and teachers. 

- Throughout this semester the team has decided and finalized the project topic and worked on its plan, design and how it has to be implemented while following the project guidelines.

## Future Scope:

    •	To group classes for one subject under one category.

    •	To add a feature to grade marks automatically based on the experiments.

    •	Users can create separate rooms/groups for discussion on a particular topic.

## Documentations:

- [Logbook](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/reports/Python_Mini_Project_Logbook_Group5.docx)

- [Project Ppt](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/reports/Python_Mini_Project_Presentation_Group5.pptx)

- [Final Report](https://github.com/parthd06/Python-Classroom_Management_System/blob/main/Extras/reports/Python_Mini_Project_Report_Group5.docx)

## References:

- https://www.upgrad.com/blog/python­projects­ideas­topics­beginners/ 

- https://code-projects.org/school-management-system-using-django-framework/

- https://django-sis.readthedocs.io/en/latest/
