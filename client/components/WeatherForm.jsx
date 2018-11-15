import React from 'react'


class WeatherForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            city: undefined,
            country: undefined
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log('evt', event.target)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={() => this.props.getWeatherData(this.state.city, this.state.country)}>
                    {/* {console.log('weatherform function >>>>', this.props)} */}
                    <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
                    <input type="text" name="country" placeholder="Country" onChange={this.handleChange} />
                    <button className="formbtn"><span>Get Weather</span></button>
                </form>
            </div >
        )
    }
}

export default WeatherForm