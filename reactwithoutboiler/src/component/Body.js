import React, {Component} from 'react'

export default class Body extends Component{

  constructor(){
    super()
    this.state={
      data:null,
    }
    this.getData()
  }

  getData(){
    let data = fetch('https://api.spacexdata.com/v3/launches')
    .then((resp) => {
      resp.json().then((res) => {
        console.log(res)
        this.setState({data : res})
      })
    })
  }
  

  render(){
    return(
      <div className="container spaceNavbar">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hendy</h5>
                <h6 className="card-subtitle mb-2 text-muted">Mochammad Hendy Lazuardi</h6>
                <p className="card-text">Hello My Name Mochammad Hendy Lazuardi want to more know about me?</p>
                <a href="https://www.linkedin.com/in/mochammad-hendy-lazuardi/" className="btn btn-primary">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="row">
              {
                this.state.data ? this.state.data.map((res) =>
                  <div className="col-md-3 card">
                    <div className="card-body">
                      <div className="card-title">{res.mission_name}</div>
                      <p className="card-subtitle mb-2 text-muted">{res.launch_year}</p>
                      <p className="card-text">{res.launch_date_utc}</p>
                      <p className="card-text">{res.launch_date_local}</p>
                    </div>
                  </div>
                ): <h3 className="text-center">Wait data is fetching</h3>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
