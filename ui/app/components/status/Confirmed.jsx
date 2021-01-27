import React from 'react'

const Confirmed = ({
  tx
}) => (
  <div id='confirmed_message'>
    <div class='card-body'>
      <span class='badge badge-success'>Certified</span>
      <h3 class='card-title'>Congratulations!</h3>
      <p class='card-text'>This document's digest was successfully embedded in Bitcoin Clashic blockchain. It is now permanently certified and proven to exist since the transaction was confirmed.</p>
    </div>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>
        <span class='badge badge-light'>Transaction ID: </span>{tx}
        <br />
      </li>
      {/* NOTE: Only support btc mainnet */}
      <li class='list-group-item'>
        <span class='badge badge-light'>Transaction Detail: </span>
        <a class='btn btn-primary' target='_blank' style={{ marginLeft: '.8em' }} href={`https://insight.clashic.cash/tx/${tx}`}>Insight</a>
        <a class='btn btn-primary' target='_blank' style={{ marginLeft: '.8em' }} href={`https://explorer.clashic.cash/tx/${tx}`}>RPC Explorer</a>
        <br />
      </li>
    </ul>
    <div class='card-body'>

      <p class='card-category'>To verify this document again, just re-submit it here.
      </p>
    </div>
  </div>
)

export default Confirmed
