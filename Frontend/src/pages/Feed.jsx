import { useState } from "react"

const Feed =() =>{
    const [posts , setPosts]= useState([{
        id: "1",
        image: "https://images.unsplash.com/photo-1780789593647-445af655d35e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption : "Beautiful scenery"
    }])


    return (
        <section className="feed-section">
            {
                posts.length > 0? (
                    posts.map((post)=>(
                        <div key ={post._id} className="post-card">
                            <img src="{post.image}" alt="{post.caption}" />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No post available </h1>
                )
            }


        </section>
    )
}


export default Feed