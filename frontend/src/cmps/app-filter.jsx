import React from 'react'

export class AppFilter extends React.Component {
  render() {
    return (
      <section className="app-filter">
        <ul className="ul-filter">
          <li>🏖</li>
          <li>🏝</li>
          <li>🏔</li>
          <li>⛺️</li>
          <li>🛖</li>
          <li>🏠</li>
        </ul>
        <button>Filters</button>
      </section>
    )
  }
}
