export interface NavbarLinkProps {
  text: string;
  redirectPath: string;
}

export interface SelectProps {
  optionValues: string[];
}

export interface CircleButtonProps {
  clickHandler: () => void;
  text: string;
  invertColors?: boolean;
}

export interface KanbanColumnProps {
  columnHeader: string;
}

export interface KanbanCardProps {
  title: string;
  tag: string;
  endDate: string;
  startDate?: Date | null;
}

export interface TagbarProps {
  tags: string[];
}

export interface InputTitleProps {
  name: string;
  defaultValue: string;
}

export interface TextareaProps {
  name: string;
  defaultValue: string;
}

export interface ButtonSubmitProps {
  text: string;
}
