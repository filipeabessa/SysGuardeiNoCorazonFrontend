export interface CardActionProps {
  label: string;
  actionType: 'button' | 'link';
  action?: () => void;
  href?: string;
  className?: string;
  iconElement?: JSX.Element;
}

export interface CardProps {
  title?: string;
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subheader?: string;
  variant?: 'outlined' | 'elevation';
  actions?: CardActionProps[];
  elevation?: number;
  width?: string | object;
  expanded?: boolean;
}
