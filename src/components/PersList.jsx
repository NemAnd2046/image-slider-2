import { Button } from "@heroui/react";
import React from "react";

export const PersList = ({ pers, setPers }) => {
	return (
		<div className="flex flex-wrap gap-2 justify-center">
			{pers.map(({ id, name, image }) => (
				<div key={id} className="flex flex-col w-50 h-100  p-2 rounded-2xl">
					<div className="flex-1 bg-white rounded-2xl p-2">
						<img className="object-cover w-full rounded-2xl" src={image} />
						<p className="p-2">{name}</p>
						<Button
							className={"ml-2"}
							onClick={() => setPers(pers.filter((obj) => obj.id != id))}
						>
							Delete
						</Button>
					</div>
				</div>
			))}
		</div>
	);
};
