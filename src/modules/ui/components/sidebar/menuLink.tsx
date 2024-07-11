import { IonRouterLink, useIonRouter } from '@ionic/react';

import { ListItem, ListItemPrefix } from '@material-tailwind/react';

import { cn } from '../../utils';
import { SidebarItem } from '../../models/sidebar';

interface MenuLinkProps {
  item: SidebarItem;
  handlePress?: () => void;
}

const MenuLink = ({ item, handlePress }: MenuLinkProps) => {
  const router = useIonRouter();
  const { pathname } = router.routeInfo;

  return (
    <>
      <IonRouterLink
        routerLink={item.path}
        onClick={handlePress}
        className={cn('text-inherit')}
      >
        <ListItem
          className={cn('transition-all', {
            'bg-[--bgSoft] focus:bg-[--bgSoft]': pathname === item.path,
          })}
        >
          <ListItemPrefix>{item.icon}</ListItemPrefix>
          {item.title}
        </ListItem>
      </IonRouterLink>
    </>
  );
};

export default MenuLink;
