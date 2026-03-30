import { IonButton, IonToast } from '@ionic/react';
import { useState } from 'react';
import './ExploreContainer.css';

const ExploreContainer: React.FC = () => {

  const [showToast, setShowToast] = useState(false);

  return (
    <div id="container">

      <h2>Welcome 👋</h2>
      <p>This is your Ionic Task App</p>

      <IonButton expand="block" onClick={() => setShowToast(true)}>
        Show Message
      </IonButton>

      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Hello! Your app is working 🚀"
        duration={1500}
        position="top"
      />

    </div>
  );
};

export default ExploreContainer;