import React from "react";

export const Photo = ({ image }) => {
	return (
		<div className="h-3/4">
			<img
				src={image.image}
				className="mx-auto h-[95%] rounded-md object-cover m-3"
			/>
			<p className="text-center text-teal-900">
				{image.name}, {image.age}
			</p>
		</div>
	);
};
