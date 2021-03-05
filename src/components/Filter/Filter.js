import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.filter}>
      <input
        className={s.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
