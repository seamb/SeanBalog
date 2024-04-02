import React from 'react';

const Workflows = ({ leadroute }) => {
  return (
    <>
      <div id='wrkflows'>
        <p>
          <strong>HubSpot CRM Workflows</strong>
          <div className='project-info' id='wrk_desc'>
            <br />
            <br />
            <h3>Lead Routing by Vertical and Region / Reconversion</h3>
            <br />
            <div>
              Use case:
              <br /> Leads are distributed to SDRs based on the vertical they
              work in and their region. Esisting contacts should not be
              reassigned but their existing contact owner should be notified.
              <br />
              <br />
              Solution:
              <br />
              When new leads complete an online form, their contact record
              enrolls. If the contact is already assigned an owner a
              reconversion email is sent to the contact's owner. Otherwise the
              contact is assigned an SDR based on the vertical and region
              selected on the form.
              <br />
            </div>
          </div>
          <div id='techex'>
            <img src={leadroute} alt='applogos' />
          </div>
          <br />
        </p>
      </div>
    </>
  );
};

export default Workflows;
