import { 
  IonContent, IonFab, IonFabButton, IonFabList, 
  IonHeader, IonIcon, IonPage, IonTitle, 
  IonToolbar, useIonToast 
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { document, chevronUpCircle, colorPalette, globe } from 'ionicons/icons';

const Home: React.FC = () => {

  const [present] = useIonToast();

  const showToast = (msg: string) => {
    present({
      message: msg,
      duration: 1500,
      position: 'top'
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Task App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <ExploreContainer />

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>

          <IonFabList side="top">
            <IonFabButton onClick={() => showToast("Add Task")}>
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>

            <IonFabButton onClick={() => showToast("Set Priority")}>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>

            <IonFabButton onClick={() => showToast("Open Category")}>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;