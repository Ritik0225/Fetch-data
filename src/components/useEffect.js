import React from "react";
import { useEffect, useState } from "react";


const Api = () => {
  
  const [users, setUser] = useState([]);

  const getData = async () => {


    const response = await fetch(
      "https://api.github.com/repos/neovim/neovim/pulls"
    );
    // console.log(response)
    // const dataReceived = await response.json()
    setUser(await response.json());
    // console.log(dataReceived)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid text-center mt-5">
        <h1>Fetch Results</h1>
      </div>

      <div className="container-fluid col-xs-12 col-md-10 text-center mt-5 table-responsive">
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col" className="col-2">
                Title
              </th>
              <th scope="col" className="col-2">
                Base Branch
              </th>
              <th scope="col" className="col-2">
                Author Branch
              </th>
              <th scope="col" className="col-1">
                Author
              </th>
              <th scope="col" className="col-2">
                Created On
              </th>
              <th scope="col" className="col-2">
                Reviewers
              </th>
              <th scope="col" className="col-1">
                Labels
              </th>
            </tr>
          </thead>
          {users.map((currentElement) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{currentElement.title}</th>
                    <td>{currentElement.base.ref}</td>
                    <td>{currentElement.author_association}</td>
                    <td>{currentElement.user.login}</td>
                    <td>{currentElement.created_at}</td>
                    <td>{currentElement.requested_reviewers.login}</td>
                    <td>{currentElement.head.label}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Api;
