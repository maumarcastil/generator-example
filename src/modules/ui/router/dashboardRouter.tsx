import { Route } from 'react-router';

import { IonRouterOutlet } from '@ionic/react';

import DashboardLayout from '../layouts/dashboard';

import HomePage from '../../home/pages/Home';
import WalletPage from '../../wallets/pages/Wallet';
import ProfilePage from '../../profile/pages/Profile';
import CollectionsPage from '../../collections/pages/collections';
import MarketplacePage from '../../marketplace/pages/Marketplace';

const DashboardRouter = () => {
  return (
    <IonRouterOutlet>
      <DashboardLayout>
        <Route path="/" exact component={HomePage} />
        <Route path="/collections" exact component={CollectionsPage} />
        <Route path="/marketplace" exact component={MarketplacePage} />
        <Route path="/wallet" exact component={WalletPage} />
        <Route path="/profile" exact component={ProfilePage} />
      </DashboardLayout>
    </IonRouterOutlet>
  );
};

export default DashboardRouter;

{
  /*  <Route path="/" exact={true}>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact={true}>
        <Home />
      </Route>
      <Route path="/message/:id">
        <ViewMessage />
      </Route> */
}
