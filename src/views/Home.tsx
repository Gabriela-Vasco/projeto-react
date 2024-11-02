import { useEffect, useState } from "react";

const Home: React.FC = () => {
    const [state, setState] = useState<string>('');

    useEffect(() => {
        console.log('Home')
    });
    return 'Home'
};

export default Home;