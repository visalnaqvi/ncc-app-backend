import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
    isPrimary: Attribute.Boolean;
  };
}

export interface ElementsCardsContainer extends Schema.Component {
  collectionName: 'components_elements_cards_container_s';
  info: {
    displayName: 'Cards Container ';
  };
  attributes: {
    card: Attribute.Component<'elements.event-card', true>;
  };
}

export interface ElementsColumn extends Schema.Component {
  collectionName: 'components_elements_columns';
  info: {
    displayName: 'Column';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'elements.pill', true>;
    heading: Attribute.Component<'elements.heading', true>;
    button: Attribute.Component<'elements.button'>;
    image: Attribute.Media;
  };
}

export interface ElementsEventCard extends Schema.Component {
  collectionName: 'components_elements_event_cards';
  info: {
    displayName: 'Event Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.String;
    image: Attribute.Media;
    key: Attribute.String;
  };
}

export interface ElementsFooterRow extends Schema.Component {
  collectionName: 'components_elements_footer_rows';
  info: {
    displayName: 'Footer Row';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    icons: Attribute.Component<'elements.icon', true>;
  };
}

export interface ElementsHeading extends Schema.Component {
  collectionName: 'components_elements_headings';
  info: {
    displayName: 'Heading';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    isContent: Attribute.Boolean;
    isBold: Attribute.Boolean;
    isTag: Attribute.Boolean;
  };
}

export interface ElementsHeroSection extends Schema.Component {
  collectionName: 'components_elements_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ElementsIcon extends Schema.Component {
  collectionName: 'components_elements_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface ElementsPill extends Schema.Component {
  collectionName: 'components_elements_pills';
  info: {
    displayName: 'Pill';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
  };
}

export interface ElementsTabsRow extends Schema.Component {
  collectionName: 'components_elements_tabs_rows';
  info: {
    displayName: 'Tabs Row';
    description: '';
  };
  attributes: {
    tabPill: Attribute.Component<'elements.pill', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button': ElementsButton;
      'elements.cards-container': ElementsCardsContainer;
      'elements.column': ElementsColumn;
      'elements.event-card': ElementsEventCard;
      'elements.footer-row': ElementsFooterRow;
      'elements.heading': ElementsHeading;
      'elements.hero-section': ElementsHeroSection;
      'elements.icon': ElementsIcon;
      'elements.pill': ElementsPill;
      'elements.tabs-row': ElementsTabsRow;
    }
  }
}
