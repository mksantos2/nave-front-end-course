
# Moniele's resolution of the nave.rs's course challenge #26

### FILES

    src/
    ├── components/			=== == == == == == == == == == DESCRIPTION == == == == == == == == == == = =  
    │   ├── Form.js    	    : form to Create and Edit Posts 
    │   ├── Sidebar.js      : Sidebar to navigate through the pages
    ├── routes/
    │   ├── CreatePost.js   : page with the Form to create a new Post
    │   └── EditPost.js     : page with the Form to edit a new Post
    │   └── ListPost.js     : page listing the existing posts in cards
    │   └── Home.js         : Home page with sidebar to acesss the other pages
    └── styles/
        ├── formStyles.js   : CSS styles to buttons and form(input,label,div) using styled-components and 
                              material UI libs
        ├── GlobalStyles.js : Global default styles to set a theme (light or dark)
        ├── style.css       : generic CSS styles came with the repository
        └── Themes.js       : set the theme configs, i.e. change the background color and tags color
    └── styles/
        ├── posts.js        : HTTP methods with API configs (GET, POST, PUT, DELETE)
    ├── App.js              : root react file, defining all the routes from the project



### => Features implemented and accomplishments:

- Edit post page with the same form component from CreatePost
- Implemented styles with styled-components and material UI
- Developed dark and light theme switch
- Using the location and history router hooks to pass Post objects through pages


also... 

## HOW TO RUN THIS APP

#### Installing dependencies with:

### `yarn`


## In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.













