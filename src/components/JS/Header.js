import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import '../CSS/Header.css'
import { Link, useNavigation } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { ADD_TO_USERDATA } from '../../feature/navSlice';
import { auth } from '../../firebase';

function Header({ backButton }) {

    const dispatch=useDispatch()
    const navigate=useNavigation()

    const signOutPage = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                dispatch(ADD_TO_USERDATA(""));
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    };

    // const history = useHistory();

    return (
        <div className='header'>
            {backButton ? (
                <IconButton >
                    <ArrowBackIosIcon fontSize='large' className='headerIcons' />
                </IconButton>

            ) : (
                <IconButton>
                    <PersonIcon className='headerIcons' fontSize='large' />
                </IconButton>
            )}
            {/* <Link to='/'>
                <img className='header__image' src='https://drive.google.com/uc?export=download&id=16irET-NWvD4aI255f7qO_1adcHFgzrFc' alt='tinder/logo' />
            </Link> */}
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className='headerIcons' fontSize='large' />
                </IconButton>
            </Link>
            {/* <IconButton onClick={()=> signOutPage}>
                <LogoutIcon fontSize='large' />
            </IconButton> */}
        </div>
    )
}

export default Header