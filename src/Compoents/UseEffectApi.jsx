// Api Use how they are show on that
import  { useEffect, useState } from "react";
import ApiFetch from "../Pages/ApiFetch";
import Loading from "../Pages/Loading";
import "./UseEffectApi.css";

const UseEffectApi = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="row text-center">
            <ApiFetch users={users} />
        </div>
    );
};

export default UseEffectApi;
