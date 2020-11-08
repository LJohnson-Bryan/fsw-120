import React from 'react';
import AppSkeleton from '../AppSkeleton';
import '../Home/styles.css';

const Notifications = () => {
    return ( 
        <AppSkeleton render={ 
            <div>
                <h2>There are no new notifications!</h2>
            </div>
        }/>
    );
}

export default Notifications;
