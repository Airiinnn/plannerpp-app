import React from "react";

import "./modal.scss";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { hideModal } from "../../slices/modalSlice";
import Form from "../ui/form/Form";
import InputTitle from "../ui/form/inputTitle/InputTitle";
import ButtonSubmit from "../ui/form/buttonSubmit/ButtonSubmit";
import InputSelect from "../ui/form/inputSelect/InputSelect";
import InputDate from "../ui/form/inputDate/InputDate";
import Divider from "../ui/form/divider/Divider";
import Textarea from "../ui/form/textarea/Textarea";

function Modal() {
  const dispatch = useAppDispatch();
  const modalType = useAppSelector((state) => state.modal.modalType);

  function renderForm(modalType: string) {
    switch (modalType) {
      case "tag-add":
        return (
          <Form submitHandler={(event) => null}>
            <InputTitle name="title" defaultValue="Tag" />
            <ButtonSubmit text="Add" />
          </Form>
        );

      case "tag-delete":
        return (
          <Form submitHandler={(event) => null}>
            <InputTitle name="title" defaultValue="Tag" />
            <ButtonSubmit text="Delete" />
          </Form>
        );

      case "task-add":
        return (
          <Form submitHandler={(event) => null}>
            <InputTitle name="title" defaultValue="Sem start"/>
            <InputSelect name="status" defaultValue="To Do"
                         optionValues={["To Do", "In Progress", "Pending Review", "Completed"]}/>
            <InputSelect name="tag" defaultValue="CS2100" optionValues={["CS2030S", "CS2040S", "CS2100"]}/>
            <InputDate name="startDate" defaultValue="2024-01-31"/>
            <InputDate name="endDate" defaultValue="2024-01-31"/>

            <Divider />

            <Textarea name="details" defaultValue="@NUS 150124"/>

            <ButtonSubmit text="Add"/>
          </Form>
        );

      case "task-update":
        return (
          <Form submitHandler={(event) => null}>
            <InputTitle name="title" defaultValue="Sem start"/>
            <InputSelect name="status" defaultValue="To Do"
                         optionValues={["To Do", "In Progress", "Pending Review", "Completed"]}/>
            <InputSelect name="tag" defaultValue="CS2100" optionValues={["CS2030S", "CS2040S", "CS2100"]}/>
            <InputDate name="startDate" defaultValue="2024-01-31"/>
            <InputDate name="endDate" defaultValue="2024-01-31"/>

            <Divider />

            <Textarea name="details" defaultValue="@NUS 150124"/>

            <ButtonSubmit text="Update"/>
          </Form>
        );
    }
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <h2 className="modal__content__title">lol</h2>
          <h2
            className="modal__content__close"
            onClick={() => dispatch(hideModal())}
          >
            x
          </h2>
        </div>

        {renderForm(modalType)}
      </div>
    </div>
  );
}

export default Modal;
