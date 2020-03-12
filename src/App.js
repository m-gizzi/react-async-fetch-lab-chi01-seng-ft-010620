import React from 'react'

export default class App extends React.Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                peopleInSpace: json.people})
            })
        }

    renderSpacePeople() {
        return this.state.peopleInSpace.map(person => {
            return <div>{person.name}</div>
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                {this.renderSpacePeople()}
            </div>
        )
    }
}