import {  createContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

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

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
