import * as React from 'react'
import {render} from 'react-dom'
import {RootComponent} from './RootComponent'
import ChildWithBtn from "./ChildWithBtn";

interface Props {
}

class App extends React.Component<Props> {
  private data:Array<number> = [];
  constructor(props: Props) {
    super(props);
    this.srvRequest = this.srvRequest.bind(this)
    this.unmount = this.unmount.bind(this)
  }
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  srvRequest() {
    this.data = [1,2,3];
  }

  unmount() {
    this.data = [];
  }

  render() {
    return (
      <div className="example">
        <RootComponent handleSubmit={this.handleSubmit} srvRequest={this.srvRequest} unmount={this.unmount}>
        </RootComponent>
        <ChildWithBtn test={1}></ChildWithBtn>
      </div>
    );
  }
}

const id = document.getElementById('main')
render(<App/>, id)

