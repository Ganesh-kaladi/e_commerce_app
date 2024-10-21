import { Fragment } from "react"
import { Navcomponent } from "../../components/nav_component";
import { Logincomponent } from "../../components/loginComponent/login_component";

export const Loginpage = ()=>{
    return(
        <Fragment>
            <Navcomponent />
            <main className="grid justify-center items-center mt-20">
                <Logincomponent />
            </main>
        </Fragment>
    )
}