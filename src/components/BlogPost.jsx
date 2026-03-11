
import Buttons from './Buttons';
import BlogpostImg1 from "../assets/blogpost1.jpg"
import { useState } from 'react';
const posts = [
    {
        date: "4 Aug",
        views: "700 views",
        comments: "0 Comments",
        heading: "10 Points To Consider Before Buying A New Car",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post1.html"
    },
    {
        date: "6 Aug",
        views: "520 views",
        comments: "3 Comments",
        heading: "Best Budget Smartphones In 2025",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post2.html"
    },
    {
        date: "8 Aug",
        views: "910 views",
        comments: "5 Comments",
        heading: "How To Start A Successful Blog",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post3.html"
    },
    {
        date: "10 Aug",
        views: "300 views",
        comments: "1 Comment",
        heading: "Top 5 Travel Destinations In India",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post4.html"
    },
    {
        date: "12 Aug",
        views: "850 views",
        comments: "4 Comments",
        heading: "Tips For Learning JavaScript Faster",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post5.html"
    },
    {
        date: "14 Aug",
        views: "640 views",
        comments: "2 Comments",
        heading: "Best Laptops For Students",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post6.html"
    },
    {
        date: "16 Aug",
        views: "480 views",
        comments: "0 Comments",
        heading: "How To Improve Your Website Speed",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post7.html"
    },
    {
        date: "18 Aug",
        views: "720 views",
        comments: "6 Comments",
        heading: "Beginner Guide To CSS Flexbox",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post8.html"
    },
    {
        date: "20 Aug",
        views: "560 views",
        comments: "2 Comments",
        heading: "10 Ways To Earn Money Online",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post9.html"
    },
    {
        date: "22 Aug",
        views: "980 views",
        comments: "8 Comments",
        heading: "Complete Guide To Buying A Used Car",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "post10.html"
    }
];
const BlogPost = () => {
    const [page,settpage] =useState(0)
    const postperpage=5

    const start =page* postperpage
    const end =start+ postperpage

    const visiblepost =posts.slice(start,end)
    return (
        <>
            <section>
                <div className="blogs">
                   {visiblepost.map((data,index) =>(
                     <div className="blog-post" key={start+index}>
                        <img src={BlogpostImg1} />
                        <div className="post-header" >
                          <h3>{data.date}</h3>
                          <p>News {data.views} {data.comments} </p>
                        </div>
                        <h2>{data.heading}</h2>
                        <p style={{padding : "10px"}}>{data.content}</p>
                        <Buttons btnName="read more" btnLink={data.link} />
                    </div>
                   ))}
                </div>
                <div style={{display : 'flex', gap: '20px'}} >
                    <h1 onClick={() => {if(page===0){settpage(page - 1)}}} >1</h1>
                    <h1 onClick={() => {if((page+1) *postperpage < posts.length){settpage(page + 1)}}} >2</h1>
                </div>
            </section>
        </>
    );
};

export default BlogPost;