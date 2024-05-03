import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import './ExploreContainer.css';
import { IonButton, IonFabButton, IonTabButton } from '@ionic/react';
import Menu from './Menu';
interface ContainerProps{
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  let content;
  switch(name){
    case 'Tutorials':
      content = <div>
          <h1 class="main"> Welecome </h1>
          <Link to="/folder/HTML">
              <IonButton>HTML</IonButton>
          </Link>
          <Link to="/folder/CSS">
              <IonButton>CSS</IonButton>
          </Link>
          <Link to="/folder/React">
              <IonButton>React</IonButton>
          </Link>
          <Link to="/folder/Backend">
              <IonButton>Backend</IonButton>
          </Link>
          <Link to="/folder/Design">
              <IonButton>Design</IonButton>
          </Link>
        </div>
      break;
    case 'HTML':
      content = <div class="tuts">
                <h1>HTML Tutorial</h1>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/lJIrF4YjHfQ?si=blRK1Z6YibAVsHWH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Link to="/folder/Tutorials">
                  <button class = "home">back to home</button>
                </Link>
                </div>
      break;
    case 'CSS':
      content = <div class="tuts">
                <h1>CSS Tutorial</h1>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/lJIrF4YjHfQ?si=blRK1Z6YibAVsHWH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Link to="/folder/Tutorials">
                  <button class = "home">back to home</button>
                </Link>
                </div>
      break;
    case 'React':
      content = <div class="tuts">
                <h1>React Tutorial</h1>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/lJIrF4YjHfQ?si=blRK1Z6YibAVsHWH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Link to="/folder/Tutorials">
                  <button class = "home">back to home</button>
                </Link>
                </div>
      break;
    case 'Backend':
      content = <div class="tuts">
                <h1>Backend Tutorial</h1>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/lJIrF4YjHfQ?si=blRK1Z6YibAVsHWH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Link to="/folder/Tutorials">
                  <button class = "home">back to home</button>
                </Link>
                </div>
      break;
    case 'Design':
      content = <div class="tuts">
                <h1>Design Tutorial</h1>
                <iframe width="960" height="515" src="https://www.youtube.com/embed/lJIrF4YjHfQ?si=blRK1Z6YibAVsHWH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <Link to="/folder/Tutorials">
                  <button class = "home">back to home</button>
                </Link>
                </div>
      break;
                        
    default:
      content = <div>Page not found</div>;
      break;
  }
  return (
    <div id="container">
      {/* <strong>{name}</strong> */}
      {/* <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
      {content}
    </div>
  );
};

export default ExploreContainer;
