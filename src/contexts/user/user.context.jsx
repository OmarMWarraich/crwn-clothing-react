import {  createContext, useEffect, useReducer } from 'react';

import { createAction } from '../../utils/reducer/reducer.utils';

import { useNavigate } from 'react-router-dom';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unknown action type: ${type}`);
    }
}

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
    
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
                navigate('/');
            }
            if (!user) {
                navigate('/auth');
            }
            setCurrentUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const value = {
        currentUser,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
