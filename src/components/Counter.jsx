import React from "react";

export const Counter = ({ count }) => {
	return (
		<div className="text-center border-b-2 text-white p-3 m-1">
			{count != 0 ? `persons:${count}` : `today no more events...`}
		</div>
	);
};
