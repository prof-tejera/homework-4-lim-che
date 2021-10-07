import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`

  height: 10em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  flex: 1;
  font-size: 34px;
  padding: 16px;
  word-wrap: break-word;
  word-break: break-all;
  border:solid;
  border-color: silver;
`;

class Screen extends Component {
  render() {
    return <Container className="screen">{this.props.value}</Container>;
  }
}

export default Screen;
