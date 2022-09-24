import React from 'react'
import { Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ReactElement } from 'react'
import {INotion } from '../utils/Notion'

interface IPosts {
    data: any,
    showYears: boolean
}

interface IPost {
    node: any,
}

const Posts: React.FC<IPosts> = (props: IPosts) => {
    const postsByYear: Record<string,any> = {}

    if(props.showYears){
        console.log(props)
        props.data.forEach((post: INotion) => {
            const year = post.datePublished.split('-').pop() || 'no date'
            postsByYear[year] = [...(postsByYear[year] || []),post]
        })
    
        const years = Object.keys(postsByYear).reverse()
        return (
            <div>
            {years.map((year) => (
                <section key={year} className='my-14'>
                <h2 className="text-3xl mb5">{year}</h2>
                <div className='divide-y'>
                {postsByYear[year].map((node: any) => (
                    <PostItem key={node.id} node={node} />
                ))}
                </div>
                
            </section>
            ))}
            </div>
        )
    }else{
        return (
            <div>
                {props.data.map((node: any) => (
                    <PostItem key={node.id} node={node} />
                ))}
            </div>
        )
    }
}

const PostItem: React.FC<IPost> = (props: IPost) => {
    let thumbnail: ReactElement
    // if (type === 'emoji'){
    //     thumbnail = <span role='img'>{props.node.icon.emoji}</span>
    // } else if (type === 'file') {
    //     thumbnail = <GatsbyImage className='w-7 h-7 rounded' alt='Thumbnail' image={props.node.icon.remoteImage.childImageSharp.gatsbyImageData} />
    // } else if (type === 'external') {
    //     thumbnail = <img className='w-7 h-7 rounded' alt='Thumbnail' src={props.node.icon.external.url} />
    // } else {
    //     thumbnail = <span role='img'>📝</span>
    // }
    return (
        <div>
        <Link to={props.node.slug} key={props.node.id}>
            <div className='post flex'>
                        <div className='mr-4'>
                        📝
                        </div>
                        <h2 className='post-href'>
                            {props.node.title}
                        </h2>
            </div>
        </Link>
        </div>
    )
}

export default Posts