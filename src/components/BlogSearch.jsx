import { FaSearch } from "react-icons/fa";

const BlogSearch = () => {
    return (
        <>
            <section>
                <div className='blog-search'>
                    <div className='serch-input' style={{display : 'inline-block'}}>
                        <input type='search' placeholder='search keyword'></input>
                        <span> <FaSearch /> </span>
                    </div>
                    <div >
                        <h3>Safety Tips</h3>
                         <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                            <li>Meet seller at a safe location</li>
                            <li>Check the item before you buy</li>
                            <li>Pay only after collecting item</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSearch;