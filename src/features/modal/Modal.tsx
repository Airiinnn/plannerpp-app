import React from "react";

import "./modal.scss";
import { KANBAN_COLUMNS } from "../../constants";
import Form from "../ui/form/Form";
import InputTitle from "../ui/form/inputTitle/InputTitle";
import ButtonSubmit from "../ui/form/buttonSubmit/ButtonSubmit";
import InputSelect from "../ui/form/inputSelect/InputSelect";
import InputDate from "../ui/form/inputDate/InputDate";
import Divider from "../ui/form/divider/Divider";
import Textarea from "../ui/form/textarea/Textarea";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { hideModal } from "../../slices/modalSlice";

function Modal() {
  const dispatch = useAppDispatch();
  const modalType = useAppSelector((state) => state.modal.modalType);

  function getModalTitle() {
    switch (modalType.split("-")[0]) {
      case "tag":
        return "Tag";

      case "task":
        return "Task";

      default:
        return "";
    }
  }

  const tasks = useAppSelector((state) => state.tasks.tasks);
  const selectedTaskId = useAppSelector((state) => state.modal.selectedTaskId);
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  const tags = useAppSelector((state) => state.tagbar.tags);

  function renderForm() {
    switch (modalType) {
      case "tag-add":
        return (
          <Form submitHandler={(event) => null}>
            <InputTitle name="title" defaultValue="Tag Title" />
            <ButtonSubmit text="Add" />
          </Form>
        );

      case "tag-delete":
        return (
          <Form submitHandler={(event) => null}>
            <InputTitle name="title" defaultValue="Tag Title" />
            <ButtonSubmit text="Delete" />
          </Form>
        );

      case "task-add":
        return (
          <Form submitHandler={(event) => null}>
            <InputTitle
              name="title"
              defaultValue="Title"
            />

            <InputSelect
              name="status"
              defaultValue={KANBAN_COLUMNS[0].columnTitle}
              optionValues={KANBAN_COLUMNS.map((column) => column.columnTitle)}
            />

            <InputSelect
              name="tag"
              defaultValue={tags[0].title}
              optionValues={tags.map((tag) => tag.title)}
            />

            <InputDate
              name="startDate"
              defaultValue=""
            />

            <InputDate
              name="endDate"
              defaultValue=""
            />

            <Divider />

            <Textarea
              name="details"
              defaultValue=""
            />

            <ButtonSubmit text="Add"/>
          </Form>
        );

      case "task-update":
        return (
          <Form submitHandler={(event) => null}>
            <InputTitle
              name="title"
              defaultValue={selectedTask ? selectedTask.title : "Title"}
            />

            <InputSelect
              name="status"
              defaultValue={selectedTask ? selectedTask.status : KANBAN_COLUMNS[0].columnTitle}
              optionValues={KANBAN_COLUMNS.map((column) => column.columnTitle)}
            />

            <InputSelect
              name="tag"
              defaultValue={selectedTask ? selectedTask.tag : tags[0].title}
              optionValues={tags.map((tag) => tag.title)}
            />

            <InputDate
              name="startDate"
              defaultValue={selectedTask ? selectedTask.endDate : ""}
            />

            <InputDate
              name="endDate"
              defaultValue={selectedTask ? selectedTask.startDate : ""}
            />

            <Divider />

            <Textarea
              name="details"
              defaultValue={selectedTask ? selectedTask.details : ""}
            />

            <ButtonSubmit text="Add"/>
          </Form>
        );

      default:
        return (<h2>Uh oh... You aren't supposed to see this.</h2>);
    }
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <h2 className="modal__content__title">{getModalTitle()}</h2>
          <h2
            className="modal__content__close"
            onClick={() => dispatch(hideModal())}
          >
            x
          </h2>
        </div>

        {renderForm()}
      </div>
    </div>
  );
}

export default Modal;
