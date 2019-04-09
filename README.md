# Clicky Game -- City Skyline Edition
### Overview
- This is a memory game web application using React.

### Objectives
- Develop a memory game web app using React.
- Break up application's UI into components, manage component state, and respond to user events.

### Deployment
- Live app @ GitHub
  - https://jenaym.github.io/React-Game/
- GitHub Repository
  - https://github.com/jenaym/React-Game
 
### Game Rules
- Click on any of pictures to earn a point, but do not click on the same picure twice.
- Each time when a picture is clicked, positions of the pictures will be shuffled.

### Installation
- This app can also be installed locally through the following steps:
    - Clone the git repository
        git clone https://github.com/jenaym/React-Game.git
    - Install necessary packages
        npm install
    - Start the web server
        npm start
The web page should open in a browser automatically. If it does not, try entering the following URL into the address bar to start devlopment http web server.
http://localhost:3000/

### Directories & Files
- create-react-app was used initially to start development of this app.
- App.js has been modified.
- The other React components such as Item and Game have been added specifically for this web application.

```
src
├── components
│   ├── ContentContainer
│   │   ├── index.js
│   │   └── style.css
│   ├── Game
│   │   └── index.js
│   ├── Header
│   │   ├── index.js
│   │   └── style.css
│   ├── Item
│   │   ├── index.js
│   │   └── style.css
│   ├── NavBar
│   │   ├── index.js
│   │   └── style.css
├── App.js
├── data.json
├── index.js
└── serviceWorker.js
```


### Game Snapshots
- Initial screen Demo image 1
  
![alt](clickygame/public/DemoImages/Demo&#32;1.png)

- The Score increses while same images are not clicked
  
![alt](clickygame/public/DemoImages/Demo&#32;2.png)

- The Score resets when the same image is clicked. If it's the highest score, Top Score is updated.
  
![alt](clickygame/public/DemoImages/Demo&#32;3.png)

#### Written By Jenay McAuley