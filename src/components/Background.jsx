import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
	const blobRefs = useRef([]);
	const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
	];

	useEffect(() => {
		let currentScroll = 0;
		let requestId;

		const handleScroll = () => {
			const newScroll = window.pageYOffset;
			const scrollDelta = newScroll - currentScroll;
			currentScroll = newScroll;

			blobRefs.current.forEach((blob, index) => {
				const initialPos = initialPositions[index];

				const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340;
				const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40;

				const x = initialPos.x + xOffset;
				const y = initialPos.y + yOffset;

				blob.style.transform = `translate(${x}px, ${y}px)`;
				blob.style.transition = "transform 1.4s ease-out";
			});

			requestId = requestAnimationFrame(handleScroll);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			cancelAnimationFrame(requestId);
		};
	}, []);

	return (
		<div className="absolute inset-0 -z-10 pointer-events-none">
			<div className="absolute inset-0">
				<div
					ref={(ref) => (blobRefs.current[0] = ref)}
					className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"
				></div>
				<div
					ref={(ref) => (blobRefs.current[1] = ref)}
					className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"
				></div>
				<div
					ref={(ref) => (blobRefs.current[2] = ref)}
					className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"
				></div>
				<div
					ref={(ref) => (blobRefs.current[3] = ref)}
					className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"
				></div>
			</div>
		</div>
	);
};

export default AnimatedBackground;
