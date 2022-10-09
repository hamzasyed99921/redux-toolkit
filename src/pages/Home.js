import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import User from '../components/User';
import { getUser } from '../store/actions/usersAction';


const Home = () => {
    const { users, loader } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, []);
    return !loader ?
        <>
        <Filter/>
        <table class="table">
        <thead class="table-dark">
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
                <User key={index} user={user} index={index} />
            ))}
        </tbody>
    </table> </>: <Loader />
}

export default Home 