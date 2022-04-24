import './App.scss';
import jobs from './data/jobs.json';

function App() {
	const displayKind = 'list';

	return (
		<div className="App">
			<h1>Job Application Process</h1>
			<div className="jobs">
				{jobs.map((job, index) => {
					return (
						<>
							{displayKind === 'full' ? (
								<div key={index} className="job">
									<div className="position">
										<a href={job.url}>{job.position}</a>
									</div>
									<div className="skills">{job.skills}</div>
									<div className="bulkText">
										{job.bulkText}
									</div>
								</div>
							) : (
								<li key={index}>list</li>
							)}
						</>
					);
				})}
			</div>
		</div>
	);
}

export default App;
