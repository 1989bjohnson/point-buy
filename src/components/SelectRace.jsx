import React, { Component } from "react";
import data from "../data/data";

class SelectRace extends Component {
  state = {
    selectedRace: "Elf"
  };
  renderRaceSelect = data.races.map(race => (
    <option value={race.name}>{race.name}</option>
  ));
  renderSubRaceSelect = data.races.map(race => <option>{race.subRace}</option>);
  onSelect = e => {
    this.setState({
      selectedRace: e.target.value
    });
  };
  renderSubrace = () => {
    const race = data.races.find(race => race.name == this.state.selectedRace);
    return race.subRace ? (
      <select>
        {race.subRace.map(subRace => (
          <option>{subRace.name}</option>
        ))}
      </select>
    ) : null;
  };
  render() {
    return (
      <React.Fragment>
        <select value={this.state.selectedRace} onChange={this.onSelect}>
          {this.renderRaceSelect}
        </select>
        {this.state.selectedRace && <div>{this.renderSubrace()}</div>}
      </React.Fragment>
    );
  }
}

export default SelectRace;
