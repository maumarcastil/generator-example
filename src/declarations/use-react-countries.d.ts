declare module 'use-react-countries' {
  interface Country {
    name: string;
    capital: string;
    area: number;
    coordinates: number[];
    currencies: {
      name: string;
      symbol: string;
    }[];
    languages: string[];
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    postalCode: {
      format: string;
      regex: string;
    };
    flags: {
      png: string;
      svg: string;
    };
    population: number;
    emoji: string;
    countryCallingCode: string;
  }

  interface UseCountriesResult {
    countries: Country[];
  }

  export function useCountries(): UseCountriesResult;
}
