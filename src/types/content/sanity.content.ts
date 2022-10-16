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

export interface ContentNotes {
  title: string;
  content: RichText;
}

export interface RichText {
  children: Array<{ text: string }>;
}

export interface Form {
  name: string;
  formControls: FormControl[];
  button: Button;
}

export interface FormControl {
  name: string;
  label: string;
  type: FormControlType;
  placeholder: string;
  options: string[];
}

export enum FormControlType {
  TEXTINOUT = 'textInput',
  TEXTAREA = 'textArea',
  SINGLESELECT = 'singleSelect',
  MULTISELECT = 'multiSelect',
  RADIO = 'radio',
  CHECKBOX = 'checkBox',
}

export interface Button {
  text: string;
  type: 'default';
  href: string;
}
export interface MainContentProps {
  allSanityMainContent: {
    edges: [
      {
        node: {
          titleText: string;
          name: string;
          contentNotes: ContentNotes;
          subContentTitle: string;
          subContentTitleNote: string;
          form: Form;
          logoText: string;
          logo: {
            asset: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      }
    ];
  };
}
