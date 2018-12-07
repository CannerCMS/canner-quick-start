import React from 'react';
import ReactDOM from 'react-dom';

// canner packages
import Canner from 'canner';
import Container from '@canner/container';
import Router from '@canner/router';

// your schema
import schema from '../schema/canner.schema.js';

import logo from '../static/logo-word-white.png';

class CMSExample extends React.Component {
  router = new Router({
    baseUrl: "/canner-quick-start"
  });

  componentDidMount() {
    // Trigger the Canner to update the UI with the corresponding part of your CMS.
    this.unlisten = this.router.history.listen(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <Container
        schema={schema}
        router={this.router}
        navbarConfig={{
          showSaveButton: true,
          logo
        }}
        sidebarConfig={{
          menuConfig: true
        }}
      >
        <Canner />
      </Container>
    );
  }
}

//render it
ReactDOM.render(<CMSExample />, document.getElementById("root"));