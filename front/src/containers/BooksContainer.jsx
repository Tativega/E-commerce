import React from "react";
import { connect } from "react-redux";
import Books from "../components/Books";
import { fetchBooks, fetchBook } from "../store/actions/books";
import { fetchUser } from "../store/actions/users";

const mapStateToProps = ({ books }) => ({
  books: books.list,
  filtered: books.filtered
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
  fetchBook: id => dispatch(fetchBook(id)),
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
