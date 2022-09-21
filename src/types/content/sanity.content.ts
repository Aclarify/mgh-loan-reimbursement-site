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
        };
      }
    ];
  };
}
