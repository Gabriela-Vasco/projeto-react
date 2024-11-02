import { useEffect, useState } from "react";

const Settings: React.FC = () => {
    const [state, setState] = useState<string>('');

    useEffect(() => {
        console.log('Home')
    });
    return 'Settings'
};

export default Settings;