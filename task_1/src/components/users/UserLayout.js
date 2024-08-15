import { useState } from 'react'
import { Outlet } from 'react-router-dom';

export default function UserLayout()
{
    const usersArray = [
        {
            id: 1,
            firstName: "Semen",
            lastName: "Kos",
            email: "semenkos@gmail.com",
            phone: "+380685463354",
        },
    ];

    const [users, setUsers] = useState(usersArray);

    return (
        <Outlet context={[users, setUsers]}/>
    );
}