import {FormEvent, ReactNode} from "react";
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
  id: string;
  title: string;
  tag: string;
  endDate: string;
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

export interface FormProps {
  submitHandler: (event: FormEvent) => void;
  children: ReactNode;
}

export interface Task {
  id: string;
  title: string;
  status: string;
  tag: string;
  endDate: string;
  startDate: string;
  details: string;
}

export interface Tag {
  title: string;
  selected: boolean;
}

export interface Column {
  columnId: string;
  columnTitle: string;
}
