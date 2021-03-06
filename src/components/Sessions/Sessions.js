import React from "react"
import SessionList from "../Sessions/SessionList"
import { useStaticQuery, graphql } from "gatsby"

const getSessions = graphql`
  query {
    sessions: allContentfulSession {
      edges {
        node {
          name
          slug
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Sessions = () => {
  const { sessions } = useStaticQuery(getSessions)

  return <SessionList sessions={sessions} />
}

export default Sessions
