import React from 'react';

const Services = () => {
	return (
		<section className='section-home-services bg-white page-padding'>
			<div className="container sm:mx-10 pt-25">
				<div className='flex justify-between items-center gap-10'>
					<div className="col-left w-full bg-pink-400/25">
						<div className='mb-3'>
							<img src="/icons/icon-star.svg" alt="star icon"/>
						</div>
						<div>
							<h2 className='text-6xl font-semibold uppercase'>Brand <br/>Services</h2>
						</div>
					</div>
					<div className="col-right w-full bg-lemon-200"></div>
				</div>
			</div>
		</section>
	);
};
export default Services;
