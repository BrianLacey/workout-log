import React, { PureComponent } from "react";
import FormInput from "../components/FormInput";
import Dropdown from "../components/Dropdown";
import ContainerPanel from "./ContainerPanel";
import "./Landing.css";
import * as exerciseAjax from "../ajax/exercise.ajax";

class Landing extends PureComponent {
  constructor(props) {
    super(props);
    this.clearedFormData = {
      name: "",
      sets: "",
      reps: "",
      weight: "",
      weekDay: ""
    };
    this.state = {
      formData: this.clearedFormData,
      schedule: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    exerciseAjax.readAll().then(allExercises => {
      this.setState({ schedule: allExercises });
    });
  }

  onChange(e) {
    let formDataCopy = { ...this.state.formData };
    formDataCopy[e.target.name] = e.target.value;
    this.setState({
      formData: formDataCopy
    });
  }

  onSave(e) {
    let submission = {
      name: this.state.formData.name,
      sets: this.state.formData.sets,
      reps: this.state.formData.reps,
      weight: this.state.formData.weight,
      weekDay: this.state.formData.weekDay
    };
    exerciseAjax.create(submission).then(result => {
      this.setState(prevState => {
        submission._id = result;
        return {
          formData: this.clearedFormData,
          schedule: prevState.schedule.concat([submission])
        };
      });
    });
  }

  onSelect(e) {
    console.log(e.target);
  }

  render() {
    let sortedExercises = {};
    let unsortedExerciseList = this.state.schedule.map(item => (
      <ul
        key={item._id}
        className={`${item.weekDay.toLowerCase()} list-item-styling`}
        onClick={this.onSelect}
      >
        <li>{item.name}</li>
        <div className="no-bullets">
          <li>Sets: {item.sets}</li>
          <li>Reps: {item.reps}</li>
          <li>Weight: {item.weight}</li>
        </div>
      </ul>
    ));
    for (let i = 0; i < unsortedExerciseList.length; i++) {
      let weekDayFromClassName = unsortedExerciseList[i].props.className.split(
        " "
      );
      let weekDayKey = weekDayFromClassName[0];
      if (!sortedExercises[weekDayKey]) {
        sortedExercises[weekDayKey] = [];
      }
      sortedExercises[weekDayKey].push(unsortedExerciseList[i]);
    }
    // console.log(sortedExercises);
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
                      value={this.state.formData.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-lg-6 offset-lg-2">
                    <Dropdown
                      name="weekDay"
                      label="Day of the week"
                      options={[
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                      ]}
                      value={this.state.formData.weekDay}
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
                      value={this.state.formData.sets}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-lg-2">
                    <FormInput
                      type="number"
                      name="reps"
                      label="Reps"
                      value={this.state.formData.reps}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-lg-2">
                    <FormInput
                      type="number"
                      name="weight"
                      label="Weight"
                      value={this.state.formData.weight}
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
                    {sortedExercises.sunday || null}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Monday</h5>
                    {sortedExercises.monday || null}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Tuesday</h5>
                    {sortedExercises.tuesday || null}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Wednesday</h5>
                    {sortedExercises.wednesday || null}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Thursday</h5>
                    {sortedExercises.thursday || null}
                  </div>
                  <div className="col column-borders">
                    <h5 className="underline-text text-center">Friday</h5>
                    {sortedExercises.friday || null}
                  </div>
                  <div className="col">
                    <h5 className="underline-text text-center">Saturday</h5>
                    {sortedExercises.saturday || null}
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
