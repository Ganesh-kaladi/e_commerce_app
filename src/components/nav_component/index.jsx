import { NavLink } from "react-router-dom";

export const Navcomponent = () => {
    const nav_icons = 'px-4 font-medium'
    return (
        <nav className="flex justify-between basis-1/2 bg-cyan-400 h-14 items-center ">
            <div className="pl-6">
                <h1 className="text-4xl font-semibold"><i>dbn world</i></h1>
            </div>
            <div className="flex basis-1/3 justify-evenly">
                <div className={nav_icons}>
                    <NavLink to='/' className='outline-none'>
                        <span class="material-symbols-outlined">
                            home
                        </span>
                    </NavLink>
                </div>
                <div className={nav_icons}>
                    <NavLink to='/cart'>
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </NavLink>
                </div>
                <div className={nav_icons}>
                    <NavLink to='/favorite'>
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </NavLink>
                </div>
                <div className={nav_icons}>
                    <NavLink to='/user'>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}