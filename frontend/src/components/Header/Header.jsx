import '@lion/ui/define/lion-tabs.js';
import { useState } from 'react';

const Header = () => {
    const [userInfo, setUserInfo] = useState(true)
    return (
        <div>
            <lion-tabs>
                <button slot="tab">Home</button>
                <p slot="panel">Info page with lots of information about us.</p>
                <button slot="tab">Profile</button>
                <p slot="panel">Work page that showcases our work.</p>
                <button slot="tab">Logout</button>
                <p slot="panel">Work page that showcases our work.</p>
            </lion-tabs>

        </div>
    );
};

export default Header;