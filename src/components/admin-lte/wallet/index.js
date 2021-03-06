/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { Content } from 'adminlte-2-react'
import ImportWallet from './import'
import NewWallet from './create'
import InfoWallets from './info'
import WalletInfo from './wallet-info'
import { interfaces } from 'mocha'

let _this
class Wallet extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {}
  }

  render() {
    return (
      <Content>
        <InfoWallets />
        {/* Show wallet info is this exists */}
        {_this.props.walletInfo.mnemonic && (
          <WalletInfo walletInfo={_this.props.walletInfo} />
        )}

        {/** Shows the 'create' and 'import' cards
         *   if there's not a wallet created
         */}
        {!_this.props.walletInfo.mnemonic && (
          <>
            <NewWallet
              updateBalance={_this.props.updateBalance}
              setWalletInfo={_this.props.setWalletInfo}
              setBchWallet={_this.props.setBchWallet}
              walletInfo={_this.props.walletInfo}
              interface={_this.props.interface}

            />

            <ImportWallet
              updateBalance={_this.props.updateBalance}
              setWalletInfo={_this.props.setWalletInfo}
              setBchWallet={_this.props.setBchWallet}
              walletInfo={_this.props.walletInfo}
              interface={_this.props.interface}
            />
          </>
        )}

        {this.props.importComponents}
      </Content>
    )
  }
}

Wallet.propTypes = {
  setWalletInfo: PropTypes.func.isRequired,
  walletInfo: PropTypes.object.isRequired,
  updateBalance: PropTypes.func.isRequired,
  setBchWallet: PropTypes.func.isRequired,
  interface :PropTypes.string
}

export default Wallet
