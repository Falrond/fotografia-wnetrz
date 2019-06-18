import React from "react"
import Session from "../Sessions/Session"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getSessions = graphql`
  query {
    featuredSessions: allContentfulSession(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          slug
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedSessions = () => {
  const response = useStaticQuery(getSessions)
  const sessions = response.featuredSessions.edges

  return (
    <section className={styles.sessions}>
      <Title title="realizacje" />
      <div className={styles.center}>
        {sessions.map(({ node }) => {
          return <Session key={node.contentful_id} session={node} />
        })}
      </div>

      <AniLink fade to="/galleries" className="btn-white">
        zobacz wszystkie
      </AniLink>
    </section>
  )
}

export default FeaturedSessions
