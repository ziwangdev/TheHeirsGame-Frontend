import React, {Component} from 'react'

import '../../styles/Walllet.css'

class Wallet extends Component{
  render(){
      return(
          <div className={'wallet-container'}>
              <p>现金 $200,000</p>
              <p>总资产 $200,000</p>
          </div>
      );
  }
}

export default Wallet