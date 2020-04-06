import React, { Component } from 'react';
import axios from 'axios';

export default class CreateReport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id : '',
      percentage : '',
      percentages : [10,20,30,40,50,60,70,80,90,100]
    }
  }

  //Setting the id with the url parameter
  componentDidMount = () => {
    var url = new URL(window.location.href)
    this.setState({id : url.searchParams.get("id")});
  }

  onChangePercentage = (e) => {
    this.setState({
      percentage: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const report = {
      "id": this.state.id,
      "percentage": this.state.percentage
    }

    console.log(report)

    axios.post('http://localhost:5000/reports/', report)
      .then(res => console.log(res.data));

    window.location = '/thanks';
  }

  render() {
    return (
    <div>
      <h3>Trash report</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Percentage : </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.percentage}
              onChange={this.onChangePercentage}>
              {
                this.state.percentages.map(function(per) {
                  return <option 
                    key={per}
                    value={per}>{per}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Send the report" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}