import React from "react";
import { connect } from "react-redux";
import { getItems } from "../redux/actions";
import Item from "./item";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getItems();
  }

  listItems() {
    return this.props.items.map((item, index) => {
      return <Item item={item} key={index} />;
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Время</th>
                <th>Событие</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.listItems()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.items,
  };
};

const mapDispatchToProps = {
  getItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
