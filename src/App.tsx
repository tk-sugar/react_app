/// <reference path="./interfaces.d.ts"/>

import * as React from 'react';

const Header: React.StatelessComponent<AppProps> = (props) => {
  return(
    <h1>{props.title}</h1>
  );
};

const HandBox: React.StatelessComponent<HandBoxProps> = (props) => {
    const style = {marginLeft: 20};
    return (
      <div>
        <button onClick={() => props.actionPon(0)} style={style} >グー</button>
        <button onClick={() => props.actionPon(1)} style={style} >チョキ</button>
        <button onClick={() => props.actionPon(2)} style={style} >パー</button>
      </div>
    );
};

const Result: React.StatelessComponent<ResultProps> = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>ユーザ</th>
          <td>{props.states.user}</td>
        </tr>
        <tr>
          <th>CPU</th>
          <td>{props.states.cpu}</td>
        </tr>
        <tr>
          <th>結果</th>
          <td>{props.states.judg}</td>
        </tr>
      </table>
    </div>
  );
};

class App extends React.Component <AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      user: '',
      cpu: '',
      judg: '',
    };
    this.actionPon = this.actionPon.bind(this);
  }
  actionPon(myHand: number): void {
    const HAND_STRING = ['グー', 'チョキ', 'パー'];
    const CPU_HAND = Math.floor(Math.random() * 3);
    const JUDG_STRING = ['引き分け', '勝ち', '負け'];
    const JUDG = (CPU_HAND - myHand + 3) % 3;

    this.setState({
      user: HAND_STRING[myHand],
      cpu:  HAND_STRING[CPU_HAND],
      judg: JUDG_STRING[JUDG],
    });
  }
  render() {
    return (
      <div>
        <Header title="じゃんけん" />
        <HandBox actionPon={(myHand) => this.actionPon(myHand)} />
        <Result states={this.state} />
      </div>
    );
  }
}

export default App;
