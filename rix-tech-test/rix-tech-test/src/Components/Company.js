import React, { Component } from "react";

class Company extends Component {
    render() {
        return (
            <option value={this.props.title}>{this.props.title}</option>
        )
    }
}

export default Company