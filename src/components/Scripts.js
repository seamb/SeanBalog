import React from 'react';

const Scripts = ({ scriptSS }) => {
  return (
    <>
      <div id='app-scripts'>
        <strong>Google AppSripts</strong>
        <br />
        <img src={scriptSS} className='scriptPic' alt='app' />
        <br />
        <div className='project-info' id='wrk_desc'>
          <h3>daysBetween</h3>
          <br />
          <div>
            Use case:
            <br />
            The customer success team keeps track of new customer applications
            approved and their completion of necessary training. Stakeholders
            want to measure team efficiency by monitoring the time between
            approval and training completion. <br /> <br />
            Solution: <br />
            - Approval dates are entered manually or automated via CRM workflows
            into Column D.
            <br /> - Training dates are entered in Column E.
            <br /> - A custom function called daysBetween, implemented using
            AppScript, operates in Google Sheets. When activated, the function
            scans Column E and Column D.
            <br /> - If both cells contain data, the function calculates the
            difference between the dates in Column E and D, saving the result in
            Column F.
            <br />
            <br /> This function can enhance other AppScripts and is
            particularly useful paired with scheduled triggers.
          </div>
        </div>
      </div>
    </>
  );
};
export default Scripts;
