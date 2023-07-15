import logo from "./logo.svg"
import "./App.css"
import SplitScreen from "./SplitScreen"
const LeftSideComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "red" }}>{name}</h1>
}

const RightSideComponent = ({ name }) => {
  return <h5 style={{ backgroundColor: "blue" }}>{name}</h5>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SplitScreen leftWeight={1} rightWeight={3}>
          <LeftSideComponent name="Shaun" />
          <RightSideComponent name="Mia" />
        </SplitScreen>
      </header>
    </div>
  )
}

export default App
