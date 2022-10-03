import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface Link {
  name: string;
  text: string;
  href: string;
  type: 'default';
}

export interface Cta {
  text: string;
  href: string;
  type: 'default';
}

export enum HERO_TEXT_ICONS {
  PHONE = 'phone',
  ENVELOPE = 'envelope',
  MAP_PIN = 'map-pin',
}

export interface TextIcon {
  icon: HERO_TEXT_ICONS;
  text: string;
  href: string;
}

export interface NavigationProps {
  allSanityNavigation: {
    edges: [
      {
        node: {
          name: string;
          logo: {
            asset: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
          links: Link[];
          cta: Cta;
          textIconList: TextIcon[];
        };
      }
    ];
  };
}
