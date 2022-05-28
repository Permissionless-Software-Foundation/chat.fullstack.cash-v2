import React from 'react'
import './footer.css'
import { Row, Col } from 'adminlte-2-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types'

// Get the IPFS hash from the BCH Blockchain.
// import Memo from '../../services/memo-hash'
const siteConfig = require('../site-config')

let _this

class Footer extends React.Component {
  constructor (props) {
    super(props)
    _this = this

    _this.state = {
      ipfsHash: 'No Result',
      ipfsHashLink: ''
    }

    // this.memo = new Memo({
    //   bchWallet: props.bchWallet,
    //   bchAddr: siteConfig.memoAddr
    // })
  }

  async componentDidMount () {
    // Get hash using memo service
    // await this.handleMemoService()
  }

  // This function retrieves the IPFS CID for the latest copy of this app. That
  // CID is written to the BCH blockchain.
  // async handleMemoService () {
  //   // This is a hard-coded hash or 'checkpoint' to use in times when the
  //   // connection fails.
  //   let hash = 'QmXT85Xoi7xMRD9m7Ta4Cx8Yrsd2WSzLrq2VRo26KW4xLu'
  //
  //   // Try to retrieve the hash from the BCH blockchain.
  //   try {
  //     hash = await this.memo.findHash()
  //     console.log(`IPFS hash found: ${hash}`)
  //
  //     if (!hash) {
  //       throw new Error('Hash not found! Falling back to hard coded IPFS hash.')
  //     }
  //   } catch (err) {
  //     console.error('Error trying to retrieve IPFS hash for the site: ', err)
  //   }
  //
  //   this.setState({
  //     ipfsHash: hash,
  //     ipfsHashLink: `https://ipfs.io/ipfs/${hash}`
  //   })
  // }

  render () {
    return (
      <section id='footer'>
        <Row className='footer-container'>
          <Col md={12} className='footer-section'>
            <Row>
              <Col md={12} className='mb-1'>
                <p className='section-tittle'>Produced By</p>

                <a
                  href={siteConfig.hostUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {siteConfig.hostText}
                </a>
              </Col>
              <Col md={12}>
                <p className='section-tittle'>Source Code</p>
                <FontAwesomeIcon className='' size='lg' icon={faGithub} />
                <a
                  href={siteConfig.sourceCode}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )
  }
}

// Props prvided by redux
Footer.propTypes = {
  bchWallet: PropTypes.object // get minimal-slp-wallet instance
}

export default Footer
