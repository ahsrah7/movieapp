import React,{ useState } from "react";
import "./Registration.scss"
import user from "../../assets/images/user.svg";
import UserIcon from "../../components/common/UserIcon/UserIcon";
import Header from "../../components/common/Header/Header";
import Form from "../../components/module/Form/Form";
import { registrationFormfields } from "../../dataObjects/RegistrationForm";
import { VALIDATIONREGEX as validate } from "../../dataObjects/inputValidation";


const RegistrationForm = ()=>{
    const [formValue, setFormValue] = useState(
        registrationFormfields.reduce((acc, field) => {
          return { ...acc, [field.name]: "" };
        }, {})
      );
      const [errorMsg, setErrorMsg] = useState(
        registrationFormfields.reduce((acc, field) => {
          return { ...acc, [field.name]: "" };
        }, {})
      );
      const validator = (formValues) => {
        let errors = {};
        for (let key in formValues) {
          if (formValues[key] == "")
            errors[key] = key[0].toUpperCase() + key.slice(1) + " is required!!";
          else {
            if (validate[key]) {
              if (!validate[key].test(formValue[key])) {
                errors[key] = `Invalid ${key}`;
              }
            }
          }
        }
        return errors;
      };

  const handleSubmit = (e) => {
      e.preventDefault();
      setErrorMsg(validator(formValue));
    };

  return ( 
  <div className="registration-form">
      <Header text="Sign Up" />
        <UserIcon src={user} altText="userIcon" />
        <Form
          fields={registrationFormfields}
          onsubmit={handleSubmit}
          errorMsg={errorMsg}
          formValue={formValue}
          setFormValue={setFormValue}
          buttontext="REGISTER"
        />
        </div>)
}

export default RegistrationForm