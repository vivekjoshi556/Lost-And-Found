import { useState } from 'react';

import SubNav from "./SubNav";
import GeneralSettings from './GeneralSettings';
import PasswordSettings from './PasswordSettings';

const ProfileIndex = () => {
    const [tabName, switchTab] = useState('#home')
    

    return (
        <div className = "container px-6 mx-auto flex flex-wrap mb-6 pt-24" id="tabs">
            <div className = "w-full flex">
                <SubNav tabName = { tabName } switchTab = { switchTab }></SubNav>
                <div className = "relative flex flex-col min-w-0 break-word w-full mb-6">
                    <div className = "flex-auto">
                        <div className = "tab-content tab-space">
                            { tabName === "#home" && <div className = "block" id="tab-general"> <GeneralSettings></GeneralSettings> </div> }
                            { tabName === "#password" &&  <div id="tab-changePassword"> <PasswordSettings></PasswordSettings> </div> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileIndex;