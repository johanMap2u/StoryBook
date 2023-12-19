import { Button, Classes, Position, Drawer, H1 } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./NavbarBlueprint.css";

export const NavbarBlueprint = ({
	DarkMode,
	MenuPosition,
	label,
	ImageLogo,
	ImgStatus,
	ListNav = [],
}) => {
	const Dark = DarkMode ? "bp5-dark" : "bp5-light";
	const Menupost = MenuPosition ? "start" : "end";
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};
	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);
	return (
		<nav
			className={["bp5-navbar", Dark].join(" ")}
			style={{
				borderRadius: "5px",
			}}
		>
			<div
				style={{
					display: "flex",
					width: "100%",
					alignItems: "center",
					height: "100%",
				}}
			>
				{ImgStatus && (
					<img
						src={ImageLogo}
						alt="logo"
						style={{
							height: "30px",
							marginRight: "5px",
						}}
					/>
				)}
				<div class="bp5-navbar-group bp5-align-left">
					<div class="bp5-navbar-heading">{label}</div>
					{/* <input  class="bp5-input" placeholder="Search files..." type="text" /> */}
				</div>
				<div //desktop id
					className="hide-on-mobile"
					style={{
						width: "100%",
					}}
				>
					<div
						style={{
							width: "100%",
							display: "flex",
							// justifyContent: Menupost,
							alignItems: "center",
							// backgroundColor: "white",
						}}
					>
						<div
							style={{
								display: "flex",
								width: "100%",
								justifyContent: Menupost,
							}}
						>
							{/* <Button style={{ marginRight: "2px" }} icon="home" text="Home" />
							<Button style={{ marginRight: "2px" }} icon="home" text="Home" /> */}
							{ListNav.map((item, index) => (
								<a
									key={index}
									href={item.link}
									className={[
										"bp5-button bp5-minimal",
										`bp5-icon-${item.icon}`,
									].join(" ")}
								>
									{item.title}
								</a>
							))}
						</div>

						<div style={{ width: "30%" }}>
							<span class="bp5-navbar-divider"></span>
							<Button
								style={{ marginRight: "2px" }}
								className={"bp5-button bp5-minimal bp5-icon-user"}
							/>
							<Button
								style={{ marginRight: "2px" }}
								className={"bp5-button bp5-minimal bp5-icon-cog"}
							/>
							<Button
								style={{ marginLeft: "5px" }}
								className={Classes.MINIMAL}
								icon="document"
								text="Logout"
								onClick={()=>""}
							/>
						</div>
					</div>
				</div>
				<div className="bp5-navbar-group bp5-align-right burger-icon">
					<Button
						className={"bp5-button bp5-minimal bp5-icon-menu"}
						onClick={() => setIsOpen((prevState) => !prevState)}
					/>
				</div>
			</div>
			{isOpen && (
				<Drawer
					isOpen={isOpen}
					onClose={toggleDrawer}
					title="Palantir Foundry"
					position={Position.TOP}
				>
					{/* Content inside the drawer */}
					<div style={{ padding: "20px" }}>
						<h3>Drawer Content</h3>
						<p>Any content you want to show in the drawer.</p>
					</div>
				</Drawer>
			)}
		</nav>
	);
};

NavbarBlueprint.defaultProps = {
	DarkMode: true,
	MenuPosition: false,
};

NavbarBlueprint.propTypes = {
	DarkMode: PropTypes.bool,
	MenuPosition: PropTypes.bool,
	ImgStatus: PropTypes.bool,
};
