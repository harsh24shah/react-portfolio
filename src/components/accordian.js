import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Panel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this);
			const height = el.querySelector('.panel-inner').scrollHeight;
			this.setState({
				height
			});
		}, 333);
	}

	render() {
		const { label, content, activeTab, index, activateTab } = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		const innerStyle = {
			height: `${isActive ? height : 0}px`
		}

		return (
			<div className='panel' role='tabpanel' aria-expanded={isActive}>
				<button className='panel-label hover-this' role='tab' onClick={activateTab}>{label}</button>
				<div className='panel-inner' style={innerStyle} aria-hidden={!isActive}>
					<div className='panel-content' dangerouslySetInnerHTML={{ __html: content }}></div>
				</div>
			</div>
		);
	}
}

export default class Accordion extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: 0
		};

		this.activateTab = this.activateTab.bind(this);
	}

	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}

	render() {
		const { panels } = this.props;
		const { activeTab } = this.state;
		return (
			<div className='accordion' role='tablist'>
				{panels.map((panel, index) =>
					<Panel key={index} activeTab={activeTab} index={index} {...panel} activateTab={this.activateTab.bind(null, index)} />
				)}
			</div>
		);
	}
}
