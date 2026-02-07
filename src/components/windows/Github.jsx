import React from 'react'
import MacWindow from './MacWindow'
import githubData from '../../assets/github.json'
import './github.scss'

const GitCard = ({ data = { id: 1, title: '', description: '', image: '', tags: [], repoLink: '', demoLink: '' } }) => {
    return <div className="card">
        <div className='img-container'>
            <img src={data.image} alt={data.title} />
        </div>
        <h2 className='card-title'>{data.title}</h2>
        <p className='card-description'>{data.description}</p>
        <div className="tags">
            {
                data.tags.map((tag, index) => <p key={index} className="tag">{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}><img src="./doc-icons/github.svg" alt="" />View Repo</a>
            {data.demoLink && <a href={data.demoLink}>Live Demo</a>}
        </div>
    </div>
}

const Github = () => {
    return (
        <div>
            <MacWindow >
                <div className="cards">
                    {githubData.map((project) => {
                        return <GitCard key={project.id} data={project} />
                    })}
                </div>
            </MacWindow>
        </div>
    )
}

export default Github
