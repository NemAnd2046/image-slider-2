import React from "react";
import { Button } from "@heroui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export const Controls = ({ setImgIndex, total }) => {
	const handleNext = () => {
		setImgIndex((prevIndex) => (prevIndex == total - 1 ? 0 : prevIndex + 1));
	};

	const handlePrev = () => {
		setImgIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
	};

	return (
		<div className="flex justify-around">
			<Button onClick={handlePrev} isIconOnly>
				<SlArrowLeft />
			</Button>
			<Button onClick={handleNext} isIconOnly>
				<SlArrowRight />
			</Button>
		</div>
	);
};
