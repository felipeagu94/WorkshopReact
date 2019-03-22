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
        valuesItem: [1200,1234,-1200]
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
            {hide && <Alert/>}
            <button onClick={this.onHide} type="button" className="btn btn-info">{message}</button>
            <div className="row container">
                <div className="md-12">
                    <div className="md-6">
                    <AddItem addValue={this.addValue}/>
                    </div>
                    <div className="md-6">
                        {valuesItem.map( valueItem => <Cart valueItem={valueItem} key={valueItem}/>)}
                    </div>
                    <div className="md-6">
                        <Sumary valueItem={valuesItem}/>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}