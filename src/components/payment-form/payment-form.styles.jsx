import styled from "styled-components";
import Button from "../button/button.component";
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: auto; 
        padding: 20px; 
    }
`;

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;

    @media (max-width: 768px) {
        width: 98%; 
        min-width: auto;
    }
`;

export const PaymentButton = styled(Button)`
    margin-top: 30px;
    margin-left: auto;

    @media (max-width: 768px) {
        margin: 30px auto 0;
    }
`;

export const StyledCardElement = styled(CardElement)`
  @media (max-width: 768px) {
    height: 40px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 350px;
  }
`;