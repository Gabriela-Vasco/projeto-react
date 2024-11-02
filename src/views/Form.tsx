import { useEffect, useState } from "react";

const Form: React.FC = () => {
    const [state, setState] = useState<string>('');

    useEffect(() => {
        console.log('Home')
    });
    return 'Form'
};

export default Form;