import React from 'react';
import {FaLanguage} from 'react-icons/fa';
import {AiOutlineExport} from 'react-icons/ai';
const Projects = ({data}) => {
	if (data) {
		var projects = data.projects.project.map((item, index) => {
			return (
				<div className="section-item-project" key={index}>
					<div className="image-info">
						<h3 className="item-title">{item.title}</h3>
						<p className="flex-row">
							<FaLanguage size={27} style={{marginRight: '1rem'}} />{' '}
							{item.languages}
						</p>
						<div className="buttons">
							<button className="btn btn-link">
								<a href={item.previewURL}>Preview</a>
							</button>
							<button className="btn btn-link">
								<a href={item.sourceURL}>Source Code</a>
							</button>
						</div>
					</div>
				</div>
			);
		});
	}
    
	return (
		<section className="section">
			<h1>Projects</h1>
			<div className="section-list">{projects}</div>
			<div className="section-container">
				<h2>
					get more <span>projects</span> at
				</h2>
				<div className="section-list">
					<a
						href="https://github.com/srdragonfang/"
						class="btn-effect-1 section-item-download">
						<p className="item-show">github</p>
						<AiOutlineExport className="item-hide" size={30} />
					</a>
					<a
						href="https://codepen.io/srdragonfang/  "
						class="btn-effect-1 section-item-download">
						<p className="item-show">codepen</p>
						<AiOutlineExport className="item-hide" size={30} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
