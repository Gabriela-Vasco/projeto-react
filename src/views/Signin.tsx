import { useEffect, useState } from "react";

const Signin: React.FC = () => {
    const [state, setState] = useState<string>('Signin');

    useEffect(() => {
        console.log(state)
    });
    return (
        <div>
            <h1>Sign in</h1>
        </div>
    )
};

export default Signin;