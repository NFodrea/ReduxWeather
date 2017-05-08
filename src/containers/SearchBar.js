import React, {Component} from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {

    render() {
        return (
            <form className="input-group">
                <input type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>

        );
    }
}

SearchBar.propTypes = {};

export default SearchBar;