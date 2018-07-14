import React from 'react';

export default class extends React.PureComponent {
  render() {
    return (
      <div>
        <header>header</header>
        {this.props.children}
        <footer>footer</footer>
      </div>
    );
  }
}
