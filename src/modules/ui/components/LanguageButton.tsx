'use client';

import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { useMemo, useState } from 'react';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import { useCountries } from 'use-react-countries';
import { cn } from '../utils';

const Languages = [
  {
    label: 'English - EN',
    value: 'en',
  },
  {
    label: 'Español - ES',
    value: 'es',
  },
];

const LanguageButton = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const language = useMemo(() => currentLanguage, [currentLanguage]);

  const { countries } = useCountries();

  const spain = useMemo(
    () => countries.find((country) => country.name === 'Spain'),
    [countries]
  );
  const usa = useMemo(
    () => countries.find((country) => country.name === 'United States'),
    [countries]
  );

  const handleLanguageChange = (lang: { label: string; value: string }) => {
    if (currentLanguage === 'en' && lang.value === 'es') {
      setCurrentLanguage('es');
      return;
    } else if (currentLanguage === 'es' && lang.value === 'en') {
      setCurrentLanguage('en');
    }
  };

  return (
    <>
      <Menu open={openMenu} handler={setOpenMenu}>
        <MenuHandler>
          <Button
            variant="text"
            className="flex items-center gap-3 text-base font-normal capitalize tracking-normal outline-none"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <Avatar
              size="xs"
              alt="avatar"
              src={currentLanguage === 'en' ? usa?.flags.png : spain?.flags.png}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <FiChevronDown
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform ${
                openMenu ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="flex flex-col gap-1">
          {Languages.map((lang) => (
            <MenuItem
              key={lang.value}
              onClick={() => handleLanguageChange(lang)}
              className={cn('flex items-center justify-between', {
                '!bg-[--bgSoft]': lang.value === language,
              })}
            >
              <span>{lang.label}</span>
              <FiCheck
                className={` ${
                  lang.value === language ? `!opacity-100` : `!opacity-0`
                } transition-opacity ease-in-out`}
              />
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default LanguageButton;
