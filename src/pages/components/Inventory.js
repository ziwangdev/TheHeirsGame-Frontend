import React, {Component} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import jinwoo from '../../images/jinwoo.jpg'
import '../../styles/Inventory.css'

class Inventory extends Component {
    render(){
        return(
            <Container fluid={true} className={'inventory-container'}>
                <img src={jinwoo} className={'player-avatar'}/>
                <Row className={'card-container'}>
                    <div className={'card'} id={'card-1'}>

                    </div>
                    <div className={'card'} id={'card-2'}>

                    </div>
                    <div className={'card'} id={'card-3'}>

                    </div>
                    <div className={'card'} id={'card-4'}>

                    </div>
                    <div className={'card'} id={'card-5'}>

                    </div>
                    <div className={'card'} id={'card-6'}>

                    </div>
                    <div className={'card'} id={'card-7'}>

                    </div>
                    <div className={'card'} id={'card-8'}>

                    </div>
                </Row>
                <div className={'dice'}>
                </div>
            </Container>
        );
    }
}

export default Inventory;