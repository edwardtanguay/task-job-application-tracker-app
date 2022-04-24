import { useState } from 'react';
import './App.scss';
import jobs from './data/jobs.json';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Job Application Process</h1>
			<div className="jobs">
				{jobs.map((job, index) => {
					return (
						<div key={index} className="job">
							<div className="position"><a href={job.url}>{job.position}</a></div>
							<div className="skills">{job.skills}</div>
							<div className="bulkText">{job.bulkText}</div>
							
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
