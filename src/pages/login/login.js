

function Login() {
    return (

        <div className="login-container">
            <form>
                <div className="form-hearder">
                    <h1>Welcome</h1>
                </div>

            <div className="input-control">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <button>Submit</button>
            </div>    
            </form>
        </div>
    )
}
export default Login;