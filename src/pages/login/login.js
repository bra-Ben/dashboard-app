import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Visibility  } from '@material-ui/icons'
import HomeIcon from '@material-ui/icons/Home';
// import {PeopleIcon} from '@material-ui/icons/People'

function Login() {
    let history = useHistory()
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // const [history, setHistory] = useHistory();



    function UpdateUsername(e) {
        setUsername(e.target.value);
    }

    function UpdatPassword(e) {
        setPassword(e.target.value);
    }    

    function submit(e) {
        e.preventDefault()
        console.log('It is working')
    }

    function gotoPage(path) {
        history.push(path)
    }

    return (

        <div className="login-container">
            <form>
                <div className="form-hearder">
                    <h1>Welcome</h1>
                    <HomeIcon style={{ fontSize: 70 }} />
                </div>

            <div className="input-control">
                    <div className="form-group">
                        <label>Username:</label>
                        <input placeholder='Username' type="text" className="form-control" onChange={UpdateUsername}/>
                       
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input placeholder='Password' type="password" className="form-control" onChange={UpdatPassword}/>
                        {/* <Visibility className='eye'/> */}
                    </div>

                    <button onClick={submit}>Submit</button>
                    <button onClick={() => gotoPage('./signup')}>Sign-Up</button>

            </div>    
            </form>
        </div>
    )
}
export default Login;