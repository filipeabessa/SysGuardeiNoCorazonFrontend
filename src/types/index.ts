export interface ICssProperties {
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  height?: string | number;
  minWidth?: string;
  top?: string;
  left?: string;
  right?: string;
  borderRadius?: string;
  padding?: string;
  display?: 'flex' | 'block' | 'inline' | 'inline-block' | 'inline-flex';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline'
    | undefined;
  gap?: string;
  orientation?: 'horizontal' | 'vertical';
  fontSize?: 'small' | 'medium' | 'large' | 'inherit';
  marginTop?: string;
  marginBottom?: string;
  margin?: string;
  minHeight?: string;
  overflowY?: 'auto' | 'hidden' | 'scroll' | 'visible';
  background?: string;
  paddingTop?: string;
}

export type Offense = {
  id: string;
  title: string;
  description: string;
  cursedFamilyMember: string;
  offendingPerson: string;
}

export type Disaffection = {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  witnesses: string;
  involvedPeople: string;
  offenses: Offense[];
}