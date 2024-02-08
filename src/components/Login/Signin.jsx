import { useContext } from "react";
import style from './Login.module.scss'
import { UserContext } from "../../context/UserContext";

export const Signin = () => {

    const { setUserData, userData } = useContext(UserContext);

    function handleLogin(e) {
        e.preventDefault()

        console.log(e.target.email.value);
        let url = "http://localhost:8081/sign-in"

        /* Body er inholdet af det vi sender til serveren/ request's body som sendes til serveren */
        let body = new URLSearchParams()
        body.append('email', e.target.email.value)
        body.append('password', e.target.password.value)

        let options = {
            method: "POST",
            body: body,
        }

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => setUserDate(data))
            .catch((err) => console.error(err))
    }

    console.log('User: ', userData);

    return (
        <>
            <h1>Login Page</h1>
            <b>{userData && !userData.accessToken ? userData : ''}</b>
            <h2>{userData && userData.accessToken ? 'Welcome ' + userData.name : ''}</h2>

            <form onSubmit={(e) => handleLogin(e)}>
                <label>
                    <input type="email" name="email" placeholder="Write your email here" />
                </label>
                <label>
                    <input type="password" name="password" placeholder="********" />
                </label>
                <input value="Login" type="submit" />
            </form>
        </>
    )
}