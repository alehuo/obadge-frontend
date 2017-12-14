import * as React from 'react';

interface InfoProps {}

interface InfoState {}

class Info extends React.Component < InfoProps,
InfoState > {
  render() {
    return (
      <div>
        <section className="hero is-medium is-link">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Overall badge marketplace
              </h1>
              <h2 className="subtitle">
                Sell overall badges online - fast and easy.
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Badges for sale</p>
                <p className="title">517</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Registered users</p>
                <p className="title">66</p>
              </div>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}

export default Info;
