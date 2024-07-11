import { ReactNode } from 'react';
import { IonContent, IonPage } from '@ionic/react';

import { NavbarComponent } from '../components/navbar';
interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <IonPage>
        <NavbarComponent />
        <IonContent>{children}</IonContent>
      </IonPage>
    </>
  );
};

export default DashboardLayout;
