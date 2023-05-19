import { useState } from 'react'


export function Register(){

  return (
    <>
      <div className="registerContainer">
        <div className="container-login">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title display-6">Register</h5>
                                        <div className="row align-items-start"> 
                                            <div className="col">
                                                <div className="form-floating mb-3 mt-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                    <label htmlFor="floatingInput">Email or Username</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                                    <label htmlFor="floatingPassword">Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                                    <label htmlFor="floatingPassword">Confirm password</label>
                                                </div>
                                                
                                                <div>
                                                    <a className="btn btn-primary .bg-primary mt-3" role="button">
                                                        Login 
                                                    </a>
                                                    

                                                </div>
                                                
                                            </div>
                                        </div>
                                </div>
                            </div>        
                        </div>
            </div>
    </>
  )
}


