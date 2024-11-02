import { useEffect, useState } from "react";

const Signup: React.FC = () => {
    const [state, setState] = useState<string>('');

    useEffect(() => {
        console.log('Home')
    });
    return 'Signup'
};

export default Signup;