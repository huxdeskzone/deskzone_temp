export interface IconProps {
  iconClasses: string;
  onClickIcon?: (event: React.MouseEvent<HTMLElement>) => void;
}

export interface IMobileSideBarProps {
  isOpen?: boolean;
  onOpenMobileSideBar?: () => void;
  isScrolling?: boolean;
}

export interface IServicesProps {
  id?: string;
  businessName?: string;
  service?: string;
  price?: number;
  servicePoster?: string;
  businessLogo?: string;
  serviceVideo?: string;
  category?: string;
}

export interface IModalOverlayProps {
  children: React.ReactNode;
}

export interface IMessageProp {
  message: string;
}

export interface IProtectedRouteProps {
  children: any;
  user: any;
}

export interface ICloseBtnProps {
  onToggleModal?: () => void;
  formTitle?: string;
  service?: string;
  businessLogo?: string;
}

export interface IExpertApplicationState {
  businessName?: string;
  about?: string;
  logo?: any;
  coverImage?: any;
  stage: number;
  percentage: number;
}

export interface IExpertApplicationAction {
  type: string;
  payload: string;
}

export interface IBusinessDetailsProps {
  onChangeAbout: (about: string) => void;
  businessName?: string;
  about?: string;
  formError?: any;
}

export interface IProgressInterface {
  progressStage: number;
  percentageCompletion?: number;
}
