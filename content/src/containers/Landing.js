import React, { PureComponent } from "react";
import FormInput from "../components/FormInput";
import Dropdown from "../components/Dropdown";
import ContainerPanel from "./ContainerPanel";

class Landing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sets: "",
      reps: "",
      weight: "",
      weekDay: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="white-text">Build your workout schedule here!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2" style={{ marginBottom: "5%" }}>
            <ContainerPanel
              col="col-lg-12"
              title={"Add an exercise to your weekly schedule:"}
              footer={
                <input
                  type="button"
                  name="submit"
                  className="btn btn-primary"
                  value="Submit"
                />
              }
            >
              <form>
                <div className="col-lg-4">
                  <Dropdown
                    name="weekDay"
                    label="Day of the week"
                    values={[
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ]}
                    default="Please choose a day of the week."
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-lg-3">
                  <FormInput
                    type="text"
                    name="name"
                    label="Workout Name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-lg-2">
                  <FormInput
                    type="number"
                    name="sets"
                    label="Sets"
                    value={this.state.sets}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-lg-2">
                  <FormInput
                    type="number"
                    name="reps"
                    label="Reps"
                    value={this.state.reps}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-lg-2">
                  <FormInput
                    type="number"
                    name="weight"
                    label="Weight"
                    value={this.state.weight}
                    onChange={this.onChange}
                  />
                </div>
              </form>
            </ContainerPanel>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ContainerPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
