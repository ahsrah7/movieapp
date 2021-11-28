import React,{useState} from "react";
import "./Form.scss";
import InputWithIcon from "../../common/InputField/Input";
import Button from "../../common/Button/Button";
const Form = ({fields,onsubmit,formValue,errorMsg,setFormValue,buttontext})=>{
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
      };
      
    return (
        <form className="form" autoComplete="off">
            {
               fields.map(field=>{
                return <InputWithIcon
                   type={field.type}
                   placeholder={field.placeholder}
                   onchange={handleChange}
                   value={formValue[field.name]}
                   name={field.name}
                   errorMsg={errorMsg[field.name]}
                 />
               
                   })
             
            }
            <div className="form__submit-button">
              <Button type="submit" onclick={onsubmit} label={buttontext} />
            </div>
          </form>
    )
}

export default Form;