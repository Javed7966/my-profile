import React, { Suspense } from 'react';
import Lottie from 'react-lottie';
import Profile from '../../assets/images/image.png'

const DisplayLottie = ({ animationData }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
	};

	return (
		<Suspense>
			{/* To override default onClick pause by Lottie */}
			<div onClick={() => null}>
				<img src={Profile} width={200} height={400} style={{marginLeft: "50%", marginTop: "10%"}}/>
			</div>
		</Suspense>
	);
};

export default DisplayLottie;
