//so adding css is actually really easy. first run

/**
 npm install --save-dev style-loader css-loader
**/

//so javascript can now import css files. the following needs to be copied and pasted to the webpack.config.js file

/**
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };
**/

//then add a style.css files to the src file. 

//afterwhich add the "import ./style.css" to the top of the src file. and to add the style to it, use the classList.add('') with the class in there.. I'm sure there are other means but this is a way to add it

//then run the build

import './style.css';
import picture from '../images/250.jpg'

function component() {
    const element = document.createElement('div');



    //to add the color red to the text
    element.classList.add('hello');


    //addomg text "hello webpack" to the file
    element.innerHTML = 'Hello webpack'

    //PLEASE NOTE, THE ORDER OF WHICH LINES OF CODE IS IN CAN AFFECT IF THE CODE WILL RUN OR NOT!!

    //PLACING THE BELOW IMAGE CODE IN BETWEEN THE TEXT CODE CAUSES THE IMAGE TO NOT SHOW UP

    //assigning a new ____ to the new image
    const anImage = new Image();

    //assigning the imported picture to said ____
    anImage.src = picture;

    //displaying the image on the html
    element.appendChild(anImage);



    return element;
  }
  
  document.body.appendChild(component());