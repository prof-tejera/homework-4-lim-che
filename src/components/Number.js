import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: #5a5a5a;
  color: white;
  flex: 1;
  font-size: 24px;
  margin: 4px;
  border-radius: 30px;
`;

class Number extends Component {
  render() {
    return (
      <Container className="number" onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Number;
