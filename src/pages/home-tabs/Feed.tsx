import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle } from "@ionic/react";
import { chatboxEllipsesOutline, shareOutline, thumbsUpOutline } from "ionicons/icons";


const Feed: React.FC = () => {

    const games =[
        {name:'Pokemon Yellow'},
        {name:'Mega Man X'},
        {name:'The Legend of Zelda'},
        {name:'Pac-Man'},
        {name:'Super Ingo'},
        {name:'Mobile Legends'},
        {name:'Super Mario World'},
        {name:'Call of Duty'},
        {name:'Roblox'}
    ]
  return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Feed</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1>Feed</h1>

            <IonList>
                {games.map((item,index) =>(
                    <IonCard key={index}>
                        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>{item.name}</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      <IonGrid>
        <IonRow>    
            <IonCol>
                <IonButton fill="clear" expand="full">
                     <IonIcon icon={thumbsUpOutline}></IonIcon>
                     <IonLabel style={{marginleft:'5px'}}>Like</IonLabel>
                </IonButton>
            </IonCol>
            <IonCol>
                <IonButton fill="clear" expand="full">
                     <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                     <IonLabel style={{marginleft:'5px'}}>Comment</IonLabel>
                </IonButton>
            </IonCol>
             <IonCol>
                <IonButton fill="clear" expand="full">
                     <IonIcon icon={shareOutline}></IonIcon>
                     <IonLabel style={{marginleft:'5px'}}>Share</IonLabel>
                </IonButton>
            </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
                ))}
            </IonList>

        </IonContent>
    </IonPage>
  )
};

export default Feed;