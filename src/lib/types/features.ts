export interface Button {
    label: string;
    className: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
  }
  
  export interface FeaturesContent {
    content: {
      subheader: string;
      header: string;
      description: string;
      button: Button;
    };
    featuresList: Feature[];
  }
  
  export type FeaturesTypes = {
    featuresContent: FeaturesContent;
  };
  