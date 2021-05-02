import React from 'react';

const Banner =()=>{
	return (
		<header>
		 <img src={`${process.env.PUBLIC_URL}/images/banner.jpg`}  alt="Not Found"/>

		 <div className="headerText">
		 	<h1>Don't Miss</h1>
		 	<h2>Mystery Deals</h2>
		 </div>


		</header>
	)
}

export default Banner;