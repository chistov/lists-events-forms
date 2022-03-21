import {Component} from 'react'
import {Button} from "./stories/Button";
import * as arr from './assets/data.json';

interface IProps {
  test?: number;
}

interface IState {
  inputValue: number;
  items: number[]
}

interface IItem {
  value: number;
}

export default class ChildWithBtn extends Component<IProps, IState> {
  private timer: ReturnType<typeof setTimeout>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      inputValue: 0,
      items: []
    };

    this.onClick = this.onClick.bind(this);
    this.timer = null;
  }


  srvReq() {
    arr.array.forEach((item:IItem) => this.setState((prev) => ({
      items: [...prev.items, item.value]
    })) )
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.srvReq();
    }, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  shouldComponentUpdate(nextProps:Readonly<IProps>) {
    return nextProps.test ? true: false;
  }

  componentDidUpdate(prevProps: Readonly<IProps>){
    if(this.props.test !== prevProps.test) {
      this.srvReq();
    }
  }

  onClick() {
    this.setState((prev) => ({
      inputValue: prev.inputValue + 1
    }))
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Child component</h1>
        <div>input value: {this.state.inputValue}</div>
        <Button label='Click me to increment value' onClick={this.onClick}></Button>
      </div>
    )
  }
}
