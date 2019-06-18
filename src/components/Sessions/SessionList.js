import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Session from "./Session"
import Title from "../Title"

export default class SessionList extends Component {
  state = {
    sessions: [],
    sortedSessions: [],
  }

  componentDidMount() {
    this.setState({
      sessions: this.props.sessions.edges,
      sortedSessions: this.props.sessions.edges,
    })
  }
  render() {
    return (
      <section className={styles.sessions}>
        <Title title="realizacje" />
        <div className={styles.center}>
          {this.state.sortedSessions.map(({ node }) => {
            return <Session key={node.contentful_id} session={node} />
          })}
        </div>
      </section>
    )
  }
}
