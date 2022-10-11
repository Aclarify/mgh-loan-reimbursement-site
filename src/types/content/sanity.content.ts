import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface Link {
  name: string;
  text: string;
  href: string;
  type: 'default';
}
export interface LinkGroup {
  name: string;
  text: string;
  links: Link[];
}

export interface TextIconGroup {
  name: string;
  text: string;
  textIcons: TextIcon[];
}
export interface Cta {
  text: string;
  href: string;
  type: 'default';
}
export interface TextLogo {
  titleLine1: string;
  titleLine2: string;
  titleNote: string;
  type: 'default';
}

export interface FooterDescription {
  text: string;
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

export enum SocialMediaIcons {
  FACEBOOK = 'Facebook',
  TWITTER = 'Twitter',
  INSTAGRAM = 'Instagram',
  DRIBBLE = 'Dribble',
  GITHUB = 'Github',
}
export interface MediaIcon {
  icon: SocialMediaIcons;
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
          linkGroup: LinkGroup;
          contactIconGroup: TextIconGroup;
          textLogo: TextLogo;
          footerDescription: FooterDescription;
          mediaIconList: MediaIcon[];
        };
      }
    ];
  };
}
