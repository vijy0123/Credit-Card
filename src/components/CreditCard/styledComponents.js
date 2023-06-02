// Style your elements here
import styled from 'styled-components'

// AppContainer,
//   Heading,
//   CardContainer,
//   Card,
//   CardNumber,
//   HolderName,
//   Name,
//   PaymentContainer,
//   Form,
//   Input,

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const Heading = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  text-align: center;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  background-color: #3b4b69;
  width: 50vw;
  height: 100vh;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 30px;
  width: 400px;
  height: 250px;
  padding: 20px;
`

export const CardNumber = styled.p`
  font-size: 14px;
  color: '#fff'
  margin-top: 40px;
`

export const HolderName = styled.p`
  font-size: 14px;
  color: '#fff';
`

export const Name = styled.p``

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Form = styled.form``

export const Input = styled.input`
  width: 100%;
  margin-top: 10px;
`

export const PayMethod = styled.h1``
