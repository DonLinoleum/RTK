import React,{useState,useEffect} from 'react'
import { postApi } from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/IPost'

const PostContainer = () => {
    const [limit,setLimit] = useState(10)
    const {data,error,isLoading,refetch} = postApi.useFetchAllPostsQuery(limit,{
        pollingInterval:1000
    })

    const [createPost,{}] = postApi.useCreatePostMutation()

    useEffect (()=>{
        
    },[])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title:title,body:title} as IPost)
    }

    return (
        <div>
            <div className='post__list'>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Загрузон!</h1>}
                {error && <h1>Ашипка!</h1>}
                <button onClick={()=>refetch()}>ПУК</button>
                {data?.map(post=><PostItem key={post.id} post = {post}/>)}
            </div>

        </div>
    )
}
export default PostContainer