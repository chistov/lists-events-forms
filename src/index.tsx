import * as React from 'react'
import {render} from 'react-dom'
import {RootComponent} from './RootComponent'
import ChildWithBtn from "./ChildWithBtn";

class App extends React.Component {
  render() {
    return (
      <div className="example">
        <RootComponent>
        </RootComponent>
        <ChildWithBtn test={1}></ChildWithBtn>
      </div>
    );
  }
}

const id = document.getElementById('main')
render(<App/>, id)

