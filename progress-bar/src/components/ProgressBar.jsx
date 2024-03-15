import { useEffect, useState } from 'react';

const ProgressBar = ({ value }) => {
	const [percent, setPercent] = useState(value);

	useEffect(() => {
		if (value <= 100) setPercent(value);
	}, [value]);

	return (
		<div className='progress'>
			<div
				className='value'
				style={{ color: percent >= 49 ? 'white' : 'black' }}
				role='progressbar'
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={percent}>
				{percent.toFixed()}%
			</div>
			<div className='loader' style={{ width: `${percent}%` }}></div>
		</div>
	);
};

export default ProgressBar;
