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
  href: string;
  type: 'default';
}
export interface FooterTextLogo {
  titleLine: string;
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
          footerTextLogo: FooterTextLogo;
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
  highlightText: RichText;
  _rawContent: any;
}
export interface ContentFooterNotes {
  title: string;
  content: RichText;
  _rawContent: any;
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
  // TEXTINOUT = 'textInput',
  // TEXTAREA = 'textArea',
  // MULTISELECT = 'multiSelect',
  // CHECKBOX = 'checkBox',
  RADIO = 'radio',
  SINGLESELECT = 'singleSelect',
}

export interface Button {
  text: string;
  type: 'default';
  href: string;
}

export interface RuleGroup {
  name: string;
  rules: Array<Rule>;
  ruleGroupType: EligibilityStatus;
}

export enum OperatorType {
  AND = 'all',
  OR = 'any',
}

export interface Rule {
  name: string;
  operator: OperatorType;
  conditions: Array<Condition>;
}

export enum Operator {
  EQUAL = 'equal',
  IN = 'in',
  NOT_IN = 'notIn',
  GREATER_THAN = 'greaterThan',
  GREATER_THAN_EQUAL = 'greaterThanInclusive',
}

export interface Condition {
  name: string;
  fieldName: string;
  operator: Operator;
  fieldValue?: string;
  fieldValues?: Array<string>;
}

export interface FileType {
  asset: {
    originalFileName: string;
    url: string;
  };
}

export interface DownloadableFile {
  btnText: string;
  fileName: string;
  downloadableFileURL: string;
}

export interface MainContentProps {
  titleText: string;
  name: string;
  slug?: string;
  isProgram?: boolean;
  contentNotes: ContentNotes[];
  highlightText: string;
  contentFooterNotes: ContentFooterNotes[];
  subContentTitle: string;
  subContentTitleNote: string;
  ruleGroups: Array<RuleGroup>;
  downloadableFiles: Array<DownloadableFile>;
  form: Form;
  buttonText: string;
  button: Button;
  logoText: string;
  logo: {
    asset: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export enum EligibilityStatus {
  YES = 'YES',
  NO = 'NO',
  MAYBE = 'MAYBE',
}
export interface EligibilityStatusProps {
  edges: [
    {
      node: {
        name: string;
        eligibilityTitle: string;
        contentNotes: ContentNotes;
        button: Button;
      };
    }
  ];
}

export interface ImagesProps {
  edges: [
    {
      node: {
        name: string;
        image: {
          asset: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }
  ];
}
