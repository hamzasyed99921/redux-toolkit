import React, {useRef} from 'react'
import { useDispatch } from 'react-redux';
import {filteredUsers} from '../store/reducers/usersReducer'


const Filter = () => {
    const inputRef = useRef('');
    const dispatch = useDispatch();

    const filterUsers = () => {
        dispatch(filteredUsers(inputRef.current.value));
    }

  return (
    <>
        <input type="text" name="" className='form-control mb-3' onChange={filterUsers} ref={inputRef} placeholder='Search user by name '/>
    </>
  )
}

export default Filter