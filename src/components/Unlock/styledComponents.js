// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 20%;
`

export const Text = styled.p`
  font-family: 'Roboto';
  color: white;
  font-size: 30px;
`

export const Button = styled.button`
  color: white;
  font-family: 'Roboto';
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: #06b6d4;
  cursor: pointer;
  outline: none;
`
