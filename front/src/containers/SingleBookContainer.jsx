import React from "react";
import SingleBook from "../components/SingleBook";
import { connect } from "react-redux";
import { fetchBook, truncarDescripcion } from "../store/actions/books";
import { fetchUser } from "../store/actions/users";
import { fetchToKart, fetchKart } from "../store/actions/kart";

class SingleBookContainer extends React.Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.id);
  }

  render() {
    return (
      <SingleBook
        user={this.props.user}
        book={this.props.book}
        kart={this.props.kart}
        fetchToKart={this.props.fetchToKart}
        fetchKart={this.props.fetchKart}
      />
    );
  }
}

const mapStateToProps = ({ books, user, kart }) => ({
  book: books.selected,
  user: user.loggedName,
  kart: kart.list
});

const mapDispatchToProps = dispatch => ({
  fetchBook: book => dispatch(fetchBook(book)),
  fetchUser: () => dispatch(fetchUser()),
  fetchToKart: ([user, book, kart]) =>
    dispatch(fetchToKart([user, book, kart])),
  fetchKart: user => dispatch(fetchKart(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookContainer);
