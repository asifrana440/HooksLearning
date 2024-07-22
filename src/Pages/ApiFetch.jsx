// import into use effectapi file this use useeffect hook and usestate hook fetch api
import { FaGithub } from "react-icons/fa"
const ApiFetch = ({users}) => {
  return (
    <div>
      <h1 className="heading">List of GitHub Users</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {
           users.map((curElem) => (
            <div key={curElem.id} className="col-12 col-md-4 mt-5">
              <div className="card">
                <img
                  src={curElem.avatar_url}
                  className="card-img-top rounded"
                  alt={curElem.login}
                  width="155"
                />
                <div className="card-body">
                  <h4 className="card-title mb-0">{curElem.login} <FaGithub/> </h4>
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
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default ApiFetch;
