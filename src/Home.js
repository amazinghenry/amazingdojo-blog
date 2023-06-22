import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/posts')

    return (
        <div className='home'>
            {error && <div>{ error }</div>}
            {isPending && <div> Loading.... </div>}
            { blogs && <BlogList
            blogs = {blogs}
            title = 'Featured Blog'
            />}
        </div>
     );
}
 
export default Home;