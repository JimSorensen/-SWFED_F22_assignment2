import { Link } from 'react-router-dom';
import Users from '../Users/Users';

const Manager = () => {
    return (
        <section>
            <h1>Mnager Page</h1>
            <Users/>

            <div className='flexGrow'></div>
        </section>
    )
}