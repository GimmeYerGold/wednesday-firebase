// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

// Check for ServiceWorker support before trying to install it
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./serviceworker.js').then(() => {
//         // Registration was successful
//         console.info('registration success')
//     }).catch(() => {
//         console.error('registration failed')
//             // Registration failed
//     })
// } else {
//     // No ServiceWorker Support
// }

import DOM from 'react-dom'
import React, {Component} from 'react'
import Backbone from "bbfire"

// ?apikey=

// /legislators?apikey=[your_api_key]

var url = "http://congress.api.sunlightfoundation.com/legislators/"

var apiKey = "325ade0da4514bb29ff036144a8bc016"

function app() {
    // start app
    // new Router()

    var CongressionalRouter = Backbone.Router.extend({
    	routes: {
    		"favorites": "handleFaves", 
    		"*default": "handleCuties"
    	},

    	handleCuties: function() {
    		DOM.render(<CutiesView />, document.querySelector('.container'))
    	},

    	handleFaves: function() {
    		DOM.render(<FavesView />, document.querySelector('.container'))
    	},

    	initialize: function() {
    		Backbone.history.start()
    	}
    }) 

    var CutiesView = React.createClass({
    	render: function(){
    		return (
    			<div className="cutiesView">
    				<p>Now viewing all the cuties</p>
    				<Header/>
    			</div>
    		)
    	}
    })

    var FavesView = React.createClass({
    	render: function(){
    		return (
    			<div className="favesView">
    				<p>Now viewing all your fave cuties</p>
    				<Header/>
    			</div>
    		)
    	}
    })

    var Header = React.createClass({
    	render: function(){
    		return (
    			<div className="header">
    				<h1>CONGRESSIONAL CUTIES!!!</h1>
    				<div className="navBar">
    					<a href="#allcuties">See all</a>
    					<a href="#favorites">See faves</a>
    				</div>
    			</div>
    		)
    	}
    })

    
    var cr = new CongressionalRouter()

    
}

app()
