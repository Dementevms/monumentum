import React from "react";
import { connect } from "react-redux";
import { deleteItem, updateItem } from "../redux/actions";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diffTime: "",
    };
  }

  componentDidMount() {
    this.check();
    this.ticker = setInterval(() => {
      this.check();
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  check() {
    const diffTime = this.getDiffTime(this.props.item);
    this.updateDifTime(diffTime);
    this.updateStatus(this.props.item, diffTime);
  }

  getDiffTime(data) {
    const dueday = new Date(data.date).setHours(
      data.time.hours,
      data.time.minuts
    );
    const today = new Date();
    const diff = dueday - today;
    const days = parseInt(diff / (1000 * 3600 * 24));
    const hours = parseInt(diff / (1000 * 3600) - days * 24);
    const minuts = parseInt(diff / (1000 * 60) - (60 * 24 * days + 60 * hours));
    return {
      days,
      hours,
      minuts,
    };
  }

  updateDifTime(diffTime) {
    this.setState((state) => ({ diffTime }));
  }

  updateStatus(item, diffTime) {
    if (
      diffTime.days < 1 &&
      diffTime.hours < 1 &&
      diffTime.minuts < 0 &&
      item.status !== 0
    ) {
      this.props.updateItem({ ...item, status: 0 });
      return;
    }
    if (diffTime.days < 1 && diffTime.hours < 1 && item.status > 1) {
      this.props.updateItem({ ...item, status: 1 });
      return;
    }
    if (diffTime.days < 1 && item.status > 2) {
      console.log("< 1");
      this.props.updateItem({ ...item, status: 2 });
      return;
    }
  }

  delete(item) {
    this.props.deleteItem(item);
  }

  getClassNameColor(status) {
    switch (status) {
      case 0:
        return "grey lighten-4";
      case 1:
        return "red lighten-4";
      case 2:
        return "yellow lighten-4";
      default:
        return "green lighten-4";
    }
  }

  getDiffTimeString(data) {
    const diffTime = this.getDiffTime(data);
    if (diffTime) {
      const days = diffTime.days > 0 ? `${diffTime.days} д ` : "";
      const hours = diffTime.hours > 0 ? `${diffTime.hours} ч ` : "";
      const minuts = diffTime.minuts > 0 ? `${diffTime.minuts} мин` : "";
      const result = days + hours + minuts;
      return result !== "" ? result : "Просроченно :(";
    }
  }

  render() {
    return (
      <tr className={this.getClassNameColor(this.props.item.status)}>
        <td>
          <div>{this.getDiffTimeString(this.props.item)}</div>
        </td>
        <td>{this.props.item.desc}</td>
        <td style={{ textAlign: "center" }}>
          <div
            className="btn red"
            onClick={() => {
              this.delete(this.props.item);
            }}
          >
            <i className="material-icons left" style={{ marginRight: 0 }}>
              delete_forever
            </i>
          </div>
        </td>
      </tr>
    );
  }
}

export default connect(null, { deleteItem, updateItem })(Item);
