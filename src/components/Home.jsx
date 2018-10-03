import React from 'react';

import HomeSectionIntro from '../components/HomeSectionIntro';
import HomeSectionRegisterDrone from '../components/HomeSectionRegisterDrone';
import HomeSectionHelpMeApply from '../components/HomeSectionHelpMeApply';
import HomeSectionPressRelease from '../components/HomeSectionPressRelease';
import HomeSectionFaq from '../components/HomeSectionFaq';


class Home extends React.Component {
  render() {
    return (
        <div>
            <HomeSectionIntro/>
            <HomeSectionRegisterDrone/>
            <HomeSectionHelpMeApply/>
            <div className="clearfix"></div>
            <HomeSectionPressRelease/>
            <HomeSectionFaq/>
            <div className="clearfix"></div>
        </div>
    );
  }
}

export default Home;