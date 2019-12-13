import React from 'react'

const Confirming = ({
  tx,
  handleUpdateStatus
}) => (
  <div class='card-body'>
    <span class='badge badge-light'>Confirming</span>
    <p class='card-text'>
      A transaction embedding your document's digest has been broadcast to the Title Network. Click the button below after the transaction is confirmed to complete the process.
    </p>
    <ul class='list-group list-group-flush'>
      <li class='list-group-item'>
        <span class='badge badge-light'>Transaction ID: </span>{tx}
        <br />
      </li>
      {/* NOTE: Only support btc mainnet */}
      <li class='list-group-item'>
        <span class='badge badge-light'>Transaction Detail: </span>
        <a class='btn btn-primary' target='_blank' style={{ marginLeft: '.8em' }} href={`https://insight.title.network/tx/${tx}`}>Tnet Insight</a>
        <a class='btn btn-primary' target='_blank' style={{ marginLeft: '.8em' }} href={`https://explorer.title.network/tx/${tx}`}>RPC Explorer</a>
        <a class='btn btn-primary' target='_blank' style={{ marginLeft: '.8em' }} href={`http://tnet-node.wattup.eu/tx/${tx}`}>WattUp RPC</a>
        <br />
      </li>
    </ul>
    <div class='card-body'>
      <a href='#'
        class='refreshSubmit btn btn-success btn-fill'
        onClick={handleUpdateStatus}
      >
      Complete Certification
      </a>
    </div>
  </div>
)

export default Confirming
