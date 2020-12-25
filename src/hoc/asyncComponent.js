import React, {Component} from 'react'

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent ()
            .then(cmp => {
                this.setState({component : cmp.default})
            }) 
        }

        render () {
            if (this.state.component)
                console.log(this.state.component)
            const C = this.state.component;
            // we are passing the props, that are produced be Routing,  to the returned Component 
            return (C ? <C {...this.props}/> : null)
        }
    }
}

export default asyncComponent;