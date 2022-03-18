import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs, isPending, error}= useFetch('http://localhost:8000/blogs');
    // [
    //     { title: 'My new website', body: 'loren ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'loren ipsum...', author: 'nana', id: 2 },
    //     { title: 'Web dev top tips', body: 'loren ipsum...', author: 'yoshi', id: 3 }
    // ]
    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />} */}
            {  isPending && <div>Loading...</div>}          
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" /> */}
            {/* <button onClick={()=> setName('luigi')}>change name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Home;