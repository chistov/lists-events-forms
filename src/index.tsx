import * as React from 'react'
import {render} from 'react-dom'
import {RootComponent} from './RootComponent'
import ChildWithBtn from "./ChildWithBtn";

class App extends React.Component {
  private data:Array<number> = [];
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  srvRequest() {
    this.data = [1,2,3];
  }

  render() {
    return (
      <div className="example">
        <RootComponent handleSubmit={this.handleSubmit} srvRequest={this.srvRequest}>
        </RootComponent>
        <ChildWithBtn test={1}></ChildWithBtn>
      </div>
    );
  }
}

const id = document.getElementById('main')
render(<App/>, id)

