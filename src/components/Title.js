import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{title}</span>
      </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 4px;
    color: #f7f7f7;
    font-family: "Lato", sans-serif;
    font-weight: 100;
  }
`

export default Title
