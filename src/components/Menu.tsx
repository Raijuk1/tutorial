import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, code, codeOutline, heartOutline, heartSharp, library, libraryOutline, logoCss3, logoFigma, logoHtml5, logoReact, logoStackoverflow, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Tutorials',
    url: '/folder/Tutorials',
    iosIcon: libraryOutline,
    mdIcon: library
  },
  {
    title: 'HTML',
    url: '/folder/HTML',
    iosIcon: codeOutline,
    mdIcon: code
  },
  {
    title: 'CSS',
    url: '/folder/CSS',
    iosIcon: heartOutline,
    mdIcon: logoCss3
  },
  {
    title: 'React',
    url: '/folder/React',
    iosIcon: archiveOutline,
    mdIcon: logoReact
  },
  {
    title: 'Backend',
    url: '/folder/Backend',
    iosIcon: trashOutline,
    mdIcon: logoStackoverflow
  },
  {
    title: 'Design',
    url: '/folder/Design',
    iosIcon: code,
    mdIcon: logoFigma
  }
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Tutorial</IonListHeader>
          <IonNote></IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
