import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

import classes from "./Header.module.scss";

const Header = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuth);

	const logoutHanlder = () => {
		dispatch(authActions.logout());
	};

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{isAuth && (
				<nav>
					<ul>
						<li>
							<a href="/">My Products</a>
						</li>
						<li>
							<a href="/">My Sales</a>
						</li>
						<li>
							<button onClick={logoutHanlder}>Logout</button>
						</li>
					</ul>
				</nav>
			)}
		</header>
	);
};

export default Header;
