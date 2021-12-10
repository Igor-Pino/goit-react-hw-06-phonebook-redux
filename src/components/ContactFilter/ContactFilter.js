import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../../redux/actions/contacts-actions';
import { getFilter } from '../../redux/PhoneBook-selectors';
import s from './ContactFilter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterChange(e.target.value));
  const filterValue = useSelector(getFilter);

  return (
    <label>
      <span className={s.filter_label}>Contact filter</span>
      <input type="text" name="filter" value={filterValue} onChange={onChange} />
    </label>
  );
};

export default Filter;
