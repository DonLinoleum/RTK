import React,{FC} from 'react'
import { IPost } from '../models/IPost'

interface PostItemProps{
    post: IPost
}

 const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div>
            <div className='post'>
                {post.id}. {post.title}
                <button>Delete</button>
            </div>
        </div>
    )
}
export default PostItem