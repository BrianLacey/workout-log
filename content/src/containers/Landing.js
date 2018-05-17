import React, { PureComponent } from "react";
import FormInput from "../components/FormInput";
import Dropdown from "../components/Dropdown";
import ContainerPanel from "./ContainerPanel";
import "./Landing.css";
import * as exerciseAjax from "../ajax/exercise.ajax";

class Landing extends PureComponent {
  constructor(props) {
    super(props);
    this.weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    this.state = {
      name: "",
      sets: "",
      reps: "",
      weight: "",
      weekDay: "",
      schedule: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    exerciseAjax.readAll().then(allExercises => {
      console.log(allExercises);
      this.setState({
        schedule: allExercises
      });
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSave(e) {
    let submission = {
      name: this.state.name,
      sets: this.state.sets,
      reps: this.state.reps,
      weight: this.state.weight,
      weekDay: this.state.weekDay
    };
    exerciseAjax.create(submission).then(result => console.log(result));
  }

  render() {
    let unsortedExerciseList = this.state.schedule.map(item => (
      <ul key={item._id} className={item.weekDay}>
        <li>{item.name}</li>
        <div className="no-bullets">
          <li>{item.sets}</li>
          <li>{item.reps}</li>
          <li>{item.weight}</li>
        </div>
      </ul>
    ));//Wrap this in a function that will also sort into an object of arrays caled sortedExercises.
    console.log(unsortedExerciseList);
    if (unsortedExerciseList[0]) {
      console.log(unsortedExerciseList[0].props.className);
    }
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
                  onClick={this.onSave}
                />
              }
            >
              <form>
                <div className="row">
                  <div className="col-lg-4">
                    <FormInput
                      type="text"
                      name="name"
                      label="Workout Name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-lg-6 offset-lg-2">
                    <Dropdown
                      name="weekDay"
                      label="Day of the week"
                      values={this.weekDays}
                      default="Please choose a day of the week."
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="row">
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
                </div>
              </form>
            </ContainerPanel>
          </div>
        </div>
        {this.state.schedule.length > 0 && (
          <div className="row">
            <div className="col">
              <ContainerPanel title={"Your schedule:"}>
                <div className="row">
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Sunday</h5>
                    {/* {sortedExercises.Sunday} */}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Monday</h5>
                    {/* {sortedExercises.Monday} */}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Tuesday</h5>
                    {/* {sortedExercises.Tuesday} */}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Wednesday</h5>
                    {/* {sortedExercises.Wednesday} */}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Thursday</h5>
                    {/* {sortedExercises.Thursday} */}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Friday</h5>
                    {/* {sortedExercises.Friday} */}
                  </div>
                  <div className="col">
                    <h5 className="underline-text text-center">Saturday</h5>
                    {/* {sortedExercises.Saturday} */}
                  </div>
                </div>
              </ContainerPanel>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Landing;
