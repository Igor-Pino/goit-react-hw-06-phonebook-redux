// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { filterChange } from '../../redux/actions/contacts-actions';
import s from './ContactFilter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <span className={s.filter_label}>Contact filter</span>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  value: state.contactBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterChange(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
