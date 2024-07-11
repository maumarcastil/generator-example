import { FiCreditCard, FiHome, FiShoppingCart } from 'react-icons/fi';

import { SidebarItem } from '../models/sidebar';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <FiHome />,
  },
  {
    title: 'collections',
    path: '/collections',
    icon: <FiHome />,
  },
  {
    title: 'Marketplace',
    path: '/marketplace',
    icon: <FiShoppingCart />,
  },
  {
    title: 'Wallet',
    path: '/wallet',
    icon: <FiCreditCard />,
  },
];
