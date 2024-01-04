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
