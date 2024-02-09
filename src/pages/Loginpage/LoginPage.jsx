import { Signup } from "../../components/Login/Signup";
import { Signin } from "../../components/Login/Signin";
import { Title } from "../../components/Title/Title";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export function LoginPage() {

    const { userData } = useContext(UserContext);
    //Vil gerne bruge en ternary operator til at skifte mellem componenter
    return (
        <>
            <Title title="Login" />
            <Title title="Login" />
            <Signin />
            <Signup />
        </>
    )
}
