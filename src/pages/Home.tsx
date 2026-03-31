import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { document, chevronUpCircle, colorPalette, globe } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer />

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton color="primary">
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>

          <IonFabList side="top">
            <IonFabButton color="secondary">
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>

            <IonFabButton color="tertiary">
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>

            <IonFabButton color="success">
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;