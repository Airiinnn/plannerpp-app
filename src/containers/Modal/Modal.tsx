import React from "react";

import "./modal.scss";
import InputTitle from "../../components/InputTitle/InputTitle";
import Textarea from "../../components/Textarea/Textarea";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import InputDate from "../../components/InputDate/InputDate";
import InputSelect from "../../components/InputSelect/InputSelect";


function submitHandler(event: React.FormEvent) {
  event.preventDefault();
}

function Modal() {
  return (
    <div className="modal">
      <form
        className="modal__form"
        onSubmit={submitHandler}
      >
        <div className="modal__form__header">
          <InputTitle name="title" defaultValue="Sem start"/>
          <span className="modal__close">&times;</span>
        </div>

        <InputSelect name="status" defaultValue="To Do"
                     optionValues={["To Do", "In Progress", "Pending Review", "Completed"]}/>
        <InputSelect name="tag" defaultValue="CS2100" optionValues={["CS2030S", "CS2040S", "CS2100"]}/>
        <InputDate name="startDate" defaultValue="2024-01-31"/>
        <InputDate name="endDate" defaultValue="2024-01-31"/>

        <div className="divider"/>

        <Textarea name="details" defaultValue="@NUS 150124"/>

        <ButtonSubmit text="Update"/>
      </form>
    </div>
  );
}

export default Modal;
