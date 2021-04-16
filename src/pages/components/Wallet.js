import React, {Component} from 'react'

import '../../styles/Walllet.css'

class Wallet extends Component{
  render(){
      return(
          <div className={'wallet-container'}>
              <h6>现金 $200,000</h6>
              <h6>总资产 $200,000</h6>
          </div>
      );
  }
}

export default Wallet
