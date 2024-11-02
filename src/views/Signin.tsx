import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const Signin: React.FC = () => {
    const [state, setState] = useState<string>('Signin');

    useEffect(() => {
        console.log(state)
    });
    return (
        <div>
            <h1>Sign in</h1>
            <Button variant="contained" color="primary">Sign in</Button>
        </div>
    )
};

export default Signin;