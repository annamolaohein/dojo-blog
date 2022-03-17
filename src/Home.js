import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'loren ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'loren ipsum...', author: 'nana', id: 2 },
        { title: 'Web dev top tips', body: 'loren ipsum...', author: 'yoshi', id: 3 }
    ]);

    const [name, setName]=useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs" /> */}
            <button onClick={()=> setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;