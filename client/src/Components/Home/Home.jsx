import React from "react";
import './Home.css';
import Countries from '../Countries/Countries.jsx';

// Renderizaremos nuestas Countries.
function Home() {
    return (
        <div>
            <div>
                <Countries />
            </div>
        </div>
    )
}
export default Home;
