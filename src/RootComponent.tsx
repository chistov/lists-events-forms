import * as React from 'react'

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  srvRequest: () => void;
}

interface State {
  value: string;
  shouldUpdate: boolean;
}

export class RootComponent extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      value: '',
      shouldUpdate: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate() {return this.state.shouldUpdate}

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({value: event.currentTarget.value});
  }

  componentDidMount() {
    this.props.srvRequest();
  }

  render() {
    return (
      <>
        <div className={'curr-value'}>Вы ввели: {this.state.value}</div>
        <form onSubmit={this.props.handleSubmit}>
          <div>Введите что-нибудь: </div>
          <input
            id="input"
            type="text"
            value={this.state.value}
            placeholder={'Ввод ...'}
            onChange={this.handleChange} />
          <input id="submit" type="submit" value="Submit" />
        </form>
      </>
    );
  }
}


