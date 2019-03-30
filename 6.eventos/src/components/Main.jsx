import React, { Component } from 'react'
import './index.css'
import { API_URL, API_COUNTRY, API_TOKEN } from '../config';
import Eventos from './Eventos'
import Header from './Header'
import axios from 'axios';

export default class Main extends Component {
    state = {
        categories: [],
        events: []
    }
    componentDidMount(){
        this.getCategories();
        this.getEvents();
    }
    getCategories = async () => {
        await axios.get(`${API_URL}/categories/?token=${API_TOKEN}&locale=${API_COUNTRY}`)
            .then(res => {
                //console. log(res);
                const categories = res.data.categories;
                this.setState({ categories });
        }).catch(error => console.log(error))
    }
    getEvents = async () => {
        await axios.get(`${API_URL}/events/search/?token=${API_TOKEN}&locale=${API_COUNTRY}`)
            .then(res => {
                console.log(res);
                const events = res.data.events;
                this.setState({ events });
        }).catch(error => console.log(error))
    }
    getEvent = async (nameEvent, categories) => {
        await axios.get(`${API_URL}/events/search/?q=${nameEvent}&categories=${categories}&token=${API_TOKEN}`)
            .then(res => {
                //console. log(res);
                const events = res.data.events;
                this.setState({ events });
        }).catch(error => console.log(error))
    }
    render(){
        const {categories, events} = this.state
        return(
            <div className="container">
				<Header categories={categories} getEvent={this.getEvent}/>
                <Eventos events={events}/>
			</div>
        )
    }
}