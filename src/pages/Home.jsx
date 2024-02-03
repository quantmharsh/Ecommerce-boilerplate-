import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [unauthenticated, setUnauthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkUserAuthentication() {
            const token = localStorage.getItem('authtoken');

            if (!token) {
                setUnauthenticated(true);
                return false;
            }

            try {
                const response = await fetch(`/auth/get-user`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authtoken: `${token}`,
                    },
                });

                if (!response.ok) {
                    setUnauthenticated(true);
                    return false;
                }

                return true;
            } catch (error) {
                console.error('Error fetching data:', error);
                setUnauthenticated(true);
                return false;
            }
        }

        async function loadData() {
            const unauthenticated = await checkUserAuthentication();

            if (!unauthenticated) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        }

        loadData();
    }, []);

    const handleLogout = () => {
        // Perform any logout-related actions (e.g., clearing local storage)
        localStorage.removeItem('authtoken');

        // Set loggedOut to true to trigger redirection
        // setLoggedOut(true);
        return redirect("/login");
    };

    return (
        <>
            {unauthenticated ?
                (
                    <div className="flex h-screen">
                        <div className="flex flex-col justify-center text-center m-auto text-lg font-bold">
                        <h1>Error. Not Logged In.</h1><br/>
                        <h1>Please wait, redirecting to login page...</h1>
                        </div>
                    </div>
                ) : (
                    <div className="flex h-screen">
                        <h1 className="flex text-3xl justify-center items-center m-auto">Welcome User.</h1>
                        <Link onClick={handleLogout} to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-0.5 px-2 mx-2 rounded absolute top-2 right-0"><button>Logout</button></Link>
                    </div>
                )
            }
        </>
    );
}

export default Home
