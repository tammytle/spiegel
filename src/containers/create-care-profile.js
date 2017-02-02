var React = require('react')
var CreateBasicInfo = require('./create-basic-info')
var CreateLifeStory = require('./create-life-story')

var CreateCareProfile = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},

	render: function() {
		switch (this.state.step) {
			case 1:
				return <CreateCareProfile />
			case 2:
				return <CreateLifeStory />
		}
	}
}

module.exports = CreateCareProfile