import { ReactNode } from "react";
import { DraggableProvided, DroppableProvided } from "react-beautiful-dnd";

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
  provided: DroppableProvided;
  children: ReactNode;
}

export interface KanbanCardProps {
  title: string;
  tag: string;
  endDate: string;
  startDate?: string | null;
  provided: DraggableProvided;
}

export interface InputProps {
  name: string;
  defaultValue: string;
}

export interface InputSelectProps {
  name: string;
  defaultValue: string;
  optionValues: string[];
}

export interface ButtonSubmitProps {
  text: string;
}
