import React, { Component } from 'react'
import Header from './Header'
import Noticias from './Noticias'
import Footer from './Footer'
import './Main.css'
import { API_URL, API_COUNTRY, API_KEY } from '../config';

export default class Main extends Component {
    state = {
        news: []
    };

    componentDidMount() {
        this.getNews();
    }

    getNews = (category = 'general') => {
        const URL = `${API_URL}?country=${API_COUNTRY}&category=${category}&apiKey=${API_KEY}`;
        console.log(URL);

        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({ news: data.articles }))
            .catch(error => console.log(error));
    }

    render() {
        const {news} = this.state
        return (
            <React.Fragment>
                <div className="container">
                    <Header getNews={this.getNews}/>
                    <Noticias news={news}/>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}