import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
    const [state, setState] = useState<string>('');

    useEffect(() => {
        console.log('Home')
    });
    return 'Dashboard'
};

export default Dashboard;