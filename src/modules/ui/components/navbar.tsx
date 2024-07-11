import {
  Button,
  IconButton,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import { useState } from 'react';
import { IonRouterLink, useIonRouter } from '@ionic/react';

import LanguageButton from './LanguageButton';
import SidebarMobile from './sidebar/sidebarMobile';

import { cn } from '../utils';
import { SIDEBAR_ITEMS } from '../constants/sidebarItems';

export const NavbarComponent = () => {
  const router = useIonRouter();
  const { pathname } = router.routeInfo;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onClickButtonMenu = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <Navbar className="!bg-white sticky top-0 z-10 h-full max-h-[66px] max-w-full rounded-none border-b border-gray-200 px-4 py-2 shadow-none lg:px-8 ">
        <div className="flex items-center justify-between text-blue-gray-900 h-full">
          <div className="flex items-center gap-4">
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>

            {/* logo */}
            <div className="hidden lg:flex items-center gap-4">
              <img
                src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                alt="brand"
                className="h-8 w-8"
              />
              <Typography variant="h5" color="blue-gray">
                Sidebar
              </Typography>
            </div>
          </div>

          <div className={cn('hidden lg:flex items-center gap-2')}>
            {/* <LanguageButton /> */}

            {SIDEBAR_ITEMS.map((item) => (
              <IonRouterLink
                routerLink={item.path}
                key={item.path}
                className={cn('text-inherit')}
              >
                <Button
                  variant="text"
                  className={cn(
                    'text-inherit flex items-center gap-1 text-base font-normal capitalize tracking-normal outline-none',
                    {
                      'bg-[--bgSoft] focus:bg-[--bgSoft]':
                        pathname === item.path,
                    }
                  )}
                >
                  {item.icon}
                  {item.title}
                </Button>
              </IonRouterLink>
            ))}
          </div>
          <div className={cn('flex lg:hidden items-center gap-2')}>
            <LanguageButton />
          </div>
        </div>
      </Navbar>
      <SidebarMobile
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};
