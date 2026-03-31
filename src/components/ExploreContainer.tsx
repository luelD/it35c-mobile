import { IonButton, IonToast } from '@ionic/react';
import './ExploreContainer.css';

type ContainerProps = object

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">

      <div className="card">
        <h2>Welcome </h2>
        <p>This is your Ionic app interface</p>

        <IonButton id="open-toast" expand="block" shape="round">
          Open
        </IonButton>
      </div>

      <IonToast 
        trigger="open-toast" 
        position="top" 
        message="Hi! im Luel Dawn T. Cagay" 
        duration={500}>
      </IonToast>

    </div>
    
  );
};

export default ExploreContainer;