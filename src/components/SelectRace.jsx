import React, { Component } from "react";
import data from "../data/data";

class SelectRace extends Component {
  state = {
    selectedRace: "Dragonborn",
  };
  // renderRaceSelect = data.races.map((race) => (
  //   <option value={race.name}>{race.name}</option>
  // ));
  // renderSubRaceSelect = data.races.map((race) => (
  //   <option>{race.subRace}</option>
  // ));
  // renderSubrace = () => {
  //   const race = data.races.find(
  //     (race) => race.name == this.state.selectedRace
  //   );
  //   return race.subRace ? (
  //     <select>
  //       {race.subRace.map((subRace) => (
  //         <option>{subRace.name}</option>
  //       ))}
  //     </select>
  //   ) : null;
  // };
  renderRaceSelect() {
    let len = Object.keys(data.races).length;
    let names = Object.keys(data.races);
    let options = [];
    for (let i = 0; i < len; i++) {
      options.push(names[i]);
    }
    console.log(options);
    return options;
  }
  onSelect = (e) => {
    this.setState({
      selectedRace: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <select value={this.state.selectedRace} onChange={this.onSelect}>
          {this.renderRaceSelect().map((names) => {
            return <option>{names}</option>;
          })}
        </select>
        {/* {this.state.selectedRace && <div>{this.renderSubrace()}</div>} */}
      </React.Fragment>
    );
  }
}

export default SelectRace;
