import React,{useState} from "react";
import "./Login.scss";
import user from "../../assets/images/user.svg";
import Header from "../../components/common/Header/Header";
import UserIcon from "../../components/common/UserIcon/UserIcon";
import Form from "../../components/module/Form/Form";
import { loginFields } from "../../dataObjects/RegistrationForm";
import { LOGINREGEX as validate } from "../../dataObjects/inputValidation";
import { Link } from "react-router-dom";

const Login =()=>{
    const [formValue, setFormValue] = useState(
        loginFields.reduce((acc, field) => {
          return { ...acc, [field.name]: "" };
        }, {})
      );
      const [errorMsg, setErrorMsg] = useState(
        loginFields.reduce((acc, field) => {
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
        <div className="login">
            <div>
            <Header text="Login" />
            <UserIcon src={user} altText="userIcon" />
            <div className="login__title">MY MOVIE</div>
            </div>
            <div>
            <Form
            fields={loginFields}
            onsubmit={handleSubmit}
            errorMsg={errorMsg}
            formValue={formValue}
            setFormValue={setFormValue}
            buttontext="LOGIN"
            />
            <div className="login__text">Don't have an account? <Link className="login__redirect-link" to="/">Sign Up</Link></div>
            </div>
        </div>
    )
}


export default Login;