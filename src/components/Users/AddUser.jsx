import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [username, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [hasError, setHasError] = useState(false);
    const addUserHandler = (e) => {
        e.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0){
            setHasError(true);
            return;
        }
        if(age < 1){
            setHasError(true);
            return;
        }
        props.onAddUser(username,age);
        setUserName('');
        setAge('');
    }
    const usernameChangeHandler = (event) => {
        setUserName(event.target.value);
    }
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }
    const errorChangeHandler = () => {
        setHasError(false);
    }
    return (
        <div>
            {hasError ? <ErrorModal title="An error occured!" message="Something went wrong!" errorChangeHandler={errorChangeHandler}></ErrorModal> : ''}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={usernameChangeHandler} value={username}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" name="age" onChange={ageChangeHandler} value={age}></input>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;