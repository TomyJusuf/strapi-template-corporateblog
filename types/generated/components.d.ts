import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogFeaturedPost extends Schema.Component {
  collectionName: 'components_blog_featured_posts';
  info: {
    displayName: 'FeaturedPost';
    icon: 'filter';
  };
  attributes: {
    FeaturedPostHeading: Attribute.String;
    Post: Attribute.Relation<
      'blog.featured-post',
      'oneToOne',
      'api::home-page.home-page'
    >;
  };
}

export interface BlogPostSelection extends Schema.Component {
  collectionName: 'components_blog_post_selections';
  info: {
    displayName: 'PostSelection';
    icon: 'filter';
  };
  attributes: {
    tags: Attribute.Relation<
      'blog.post-selection',
      'oneToMany',
      'api::tag.tag'
    >;
    SelectionHeading: Attribute.String;
  };
}

export interface LayoutButton extends Schema.Component {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'Button';
    icon: 'layer';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'layout';
  };
  attributes: {
    Images: Attribute.Media & Attribute.Required;
    CallToAction: Attribute.String & Attribute.Required;
    Buttons: Attribute.Component<'layout.button', true>;
  };
}

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'SeoInformation';
    icon: 'volumeUp';
  };
  attributes: {
    SeoTitle: Attribute.String;
    SeoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.featured-post': BlogFeaturedPost;
      'blog.post-selection': BlogPostSelection;
      'layout.button': LayoutButton;
      'layout.hero-section': LayoutHeroSection;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
