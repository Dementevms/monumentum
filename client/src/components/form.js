import React from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import { addItem } from "../redux/actions";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      date: null,
      time: {
        hours: 0,
        minuts: 0,
      },
      status: 3,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const elemsDatepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elemsDatepicker, {
      onSelect: (value) => {
        this.setState(() => ({
          date: value,
        }));
      },
    });
    const elemsTimepicker = document.querySelectorAll(".timepicker");
    M.Timepicker.init(elemsTimepicker, {
      twelveHour: false,
      onSelect: (h, m) => {
        this.setState(() => ({
          time: {
            hours: h,
            minuts: m,
          },
        }));
      },
    });
  }

  handleChange(event) {
    const desc = event.target.value;
    this.setState(() => ({
      desc,
    }));
  }

  render() {
    return (
      <div className="form">
        <div className="row">
          <div className="input-field col s6">
            <input
              type="text"
              value={this.state.desc}
              onChange={this.handleChange}
            />
            <label htmlFor="">Событие</label>
          </div>
          <div className="input-field col s2">
            <input type="text" className="datepicker" />
            <label htmlFor="">Дата</label>
          </div>
          <div className="input-field col s2">
            <input type="text" className="timepicker" />
            <label htmlFor="">Время</label>
          </div>
          <div className="input-field col s2">
            <div
              className="form__btn btn"
              onClick={() => this.props.addItem(this.state)}
            >
              Добавить
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(Form);
