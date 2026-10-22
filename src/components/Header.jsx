import React from "react";

export const Header = ({ current, total }) => {
	return (
		<div className="bg-teal-100 text-teal-900 flow text-center">
			<h1 className="text-lg font-bold">Fotógaléria</h1>
			<p className="text-sm">
				Kép {current}/{total}
			</p>
		</div>
	);
};
