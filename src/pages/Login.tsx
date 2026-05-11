/* eslint-disable @typescript-eslint/no-unused-vars */
import {IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { supabase } from '../lib/supabaseClient';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const doLogin = () => {
    navigation.push('/app', 'forward', 'replace');
  }

  const signInWithGoogle = async () =>{
    await supabase.auth.signInWithOAuth({
      provider:'google',
      options:{
        redirectTo:'${window.location.origin}/app'
      }
    });
  }

  return (
  <IonPage>
      <IonHeader>
      <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent className="ion-padding">

       <IonButton expand="full" onClick={signInWithGoogle}>
        <IonIcon icon={logoGoogle} />
       Continue With Google
    </IonButton>

     </IonContent>
      </IonPage>


  );
};

export default Login;
