import Loading from "../Pages/Loading";
import "./UseEffectApi.css"; // Import the CSS file for styling
import { useEffect, useState } from "react";

const UseEffectApi = () => {
        
    const [users, setUsers] = useState([]);
    const [loading, setLoading] =useState(true);
//this method complet
    //Fetch GitHub users data
    // const getUsers = async () => {
    //     try {
    //         const response = await fetch('https://api.github.com/users');
    //         if (response.ok) {
    //             const data = await response.json();
    //             setUsers(data);
    //         } else {
    //             throw new Error('Failed to fetch users data');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //     }
    // }
  //  simple api fetch  
    // const getUsers=async()=>{
    //          const response= await fetch('http://api.github.com/users');
    //             setUsers(await response.json());   
    //          }

           //  with try catch api fetch
                           const getUsers=async()=>{
                            try {
                                setLoading(false);
                                const response= await fetch('http://api.github.com/users');
                                setUsers(await response.json());   
                           } catch (error) {
                          console.log("my error is " + error)
                          }
                }
   


    //Fetch users data when component mounts
    useEffect(() => {
        getUsers();
    }, []);


    // if (loading){
    //     return <Loading/>
    // }


    return (
        <>
            <h1 className="heading">List of GitHub Users</h1>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {users.map((curElem) => (
                        <div key={curElem.id} className="col-12 col-md-4 mt-5">
                            <div className="card">
                                <img src={curElem.avatar_url} className="card-img-top rounded" alt={curElem.login} width="155" />
                                <div className="card-body">
                                    <h4 className="card-title mb-0">{curElem.login}</h4>
                                    <p className="card-text text-muted">{curElem.bio}</p>
                                    <div className="card-stats">
                                        <div className="stat">
                                            <span className="stat-label">Articles</span>
                                            <span className="stat-value">38</span>
                                        </div>
                                        <div className="stat">
                                            <span className="stat-label">Followers</span>
                                            <span className="stat-value">{curElem.followers}</span>
                                        </div>
                                        <div className="stat">
                                            <span className="stat-label">Rating</span>
                                            <span className="stat-value">8.9</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UseEffectApi;
