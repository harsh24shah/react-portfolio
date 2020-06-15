import React, { Component } from "react"
import ToggleTheme from "./toggleTheme"

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        // const { isDark, setIsDark } = this.props;
        return (
            <>
                <footer data-sal="fade" data-sal-delay="1000" data-sal-easing="ease">
                    <div className="mail-fixed">
                        <a href="mailto:024hrsh@gmail.com">024hrsh@gmail.com</a>
                    </div>
                </footer>
                <ToggleTheme
                    changeTheme={this.props.changeTheme}
                    lightTheme={this.props.lightTheme}
                />
            </>
        )
    }
}
