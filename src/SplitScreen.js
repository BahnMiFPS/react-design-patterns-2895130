import React, { Children } from "react"
const Container = ({ children }) => {
  return <div style={{ display: "flex" }}>{children}</div>
}

const Pane = ({ weight, children }) => {
  return <div style={{ flex: weight }}>{children}</div>
}

function SplitScreen({ children, leftWeight = 1, rightWeight = 0 }) {
  const [left, right] = children
  console.log(children)
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  )
}

export default SplitScreen
