import React, {Component} from 'react'
import Header from './Header'
import Alert from './Alert'
import AddItem from './AddItem'
import Cart from './Cart'
import Sumary from './Sumary'

export default class App extends Component{
    state = {
        AppTitle: 'Outgo App',
        Year: 2019,
        hide: true,
        message: 'Hide Message',
        valuesItem: []
    }
    // componentDidMount = () => console.log("Did Mount App")
    // componentDidUpdate = () => console.log("Did Update App")
    // componentWillUnmount = () => console.log("Did Unmount App")
    addValue = newValue => this.setState({valuesItem: [...this.state.valuesItem,newValue]})
    onHide = () => this.setState({ hide: !this.state.hide, message: !this.state.hide ? 'Hide Message' : 'Show Message'})
    render(){
        const {AppTitle,Year,hide,message,valuesItem} = this.state
        return(
            <React.Fragment>
            <Header AppTitle={AppTitle} Year={Year}/>
            <hr/>
            <div className="container">
                {hide && <Alert/>}
                <button onClick={this.onHide} type="button" className="btn btn-info">{message}</button>
                <hr/>
                <div className="row">
                    <div className="col-4">
                        <div className="col-12">
                            <AddItem addValue={this.addValue}/>
                        </div>                        
                    </div>
                    <div className="col-8 card">
                        <div className="col-12 card-body">
                            <h5 class="card-title">Details outgoes</h5>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        {valuesItem.map( valueItem => <Cart valueItem={valueItem} key={valueItem}/>)}
                                    </div>
                                </div>                         
                            </div>
                        </div>
                        <div className="col-12 card-body">
                            <Sumary valueItem={valuesItem}/>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}