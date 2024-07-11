import { Dispatch, SetStateAction } from 'react';
import { List, Card, Drawer, Typography } from '@material-tailwind/react';

import MenuLink from './menuLink';

import { SIDEBAR_ITEMS } from '../../constants/sidebarItems';

interface SidebarMobileProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarMobile = (props: SidebarMobileProps) => {
  const { isSidebarOpen, setIsSidebarOpen } = props;

  const closeDrawer = () => setIsSidebarOpen(false);

  return (
    <>
      <Drawer open={isSidebarOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>

          <List>
            {SIDEBAR_ITEMS.map((item) => (
              <MenuLink item={item} key={item.path} handlePress={closeDrawer} />
            ))}
          </List>
        </Card>
      </Drawer>
    </>
  );
};

export default SidebarMobile;
