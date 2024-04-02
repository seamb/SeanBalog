import React from 'react';

const AppScripts = ({ appScripts }) => {
  return (
    <>
      <div id='app-scripts'>
        <strong>Google AppSripts</strong>
        <br />
        <img src={appScripts} className='scriptPic' alt='app' />
        <br />
        <div className='project-info' id='wrk_desc'>
          <h3>daysBetween</h3>
          <br />
          <div>
            Use case:
            <br /> The customer success team logs when new customers
            applications have been approved, and when the client has nessesary
            completed training. Stakeholders would like to track team efficiency
            by monitoring the days in between the approval date and date
            trained.
            <br />
            <br />
            Solution:
            <br /> Approval dates are manually input or automated through CRM
            workflows to populate column D, and training dates are input in
            column E. Using this data and a AppScript function called
            daysBetween we open the active sheet in the Google Sheet app to the
            the sheet named “Sheet1”. Columns E and D are identified and if both
            cells hold data, the date from column E is subtracted from the date
            in D and the difference is saved in column F.
            <br />
            <br /> This function can be used in addition to or within other
            AppScripts and is very effective when paired with scheduled
            triggers.
          </div>
        </div>
      </div>
    </>
  );
};

export default AppScripts;
