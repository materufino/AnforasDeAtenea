import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';







const StyledLabel = styled.label`
    color: white;
    width: 80%;
    margin: 10px;
    font-size: 20px;
`
const StyledInput = styled.input`
 width:fit-content;
 font-size: 20px;

 @media (min-width:37.500em){
    
 }
 
`
const StyledForm = styled.form`
   width: 100%;
   display: flex;
   flex-direction:column;
`
const StyledInputButton = styled.input`
    width: 80%;
    border-radius: 5px;
    background-color:rgb(54, 53, 53);
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 20px;
    :hover{
        box-shadow:0px 10px 19px -3px rgb(105, 105, 105) ;
        font-size: 21px;
        transition:0.5s;
        border-radius: 0px;
    }
`
const StyledTextArea = styled.textarea`
    width: 80%;
    height: 100px;
    resize: none;
    margin-bottom: 10px;
`
const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xdcuntx', 'template_ts69pnb', form.current, 'kIlVbw-94d_IKnHis')
            .then((result) => {
                alert('Mensaje enviado correctamente')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <StyledForm ref={form} onSubmit={sendEmail}>
                <StyledLabel>Nombre</StyledLabel>
                <StyledInput type="text" name="user_name" required />
                <StyledLabel>Email</StyledLabel>
                <StyledInput type="email" name="user_email" required />
                <StyledLabel>Mensaje</StyledLabel>
                <StyledTextArea name="message" />
                <StyledInputButton type="submit" value="Enviar mensaje" required />
            </StyledForm>

        </>
    )
}


export default ContactForm;