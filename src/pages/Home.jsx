import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <nav>
                <Link to="/tasks">Task List</Link>
            </nav>
            <h1>Home Page</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur magnam natus quos, ab modi voluptates sapiente illo corrupti vitae nihil eveniet, quisquam eligendi nobis ex recusandae dolorum dolorem. Cumque, ducimus!
            Ullam excepturi doloremque fuga aperiam et cumque quas magni est perspiciatis tempora id sed officia quidem voluptates, quod sunt dolorem facere earuma quidem, ab dolore molestias porro natus molestiae ullam aut? Obcaecati, assumenda?</p>
        </>
    );
}

export default Home;