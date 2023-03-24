import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../UserMgt/userMgt.css'
import './SuccesfulAction.css'

const SuccessfulAction = (props) => {
    const multicCall=() =>{
        window.location.reload(false);
    }

  return (
    <div>
    <Modal
        {...props}
        size="m"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='justify-center '
      >
        <div closeButton className='check-right align-center rounded p-2'>
          <div className='flex mx-auto'>
            <div className='iconSuccess mx-auto  '>
                <i class="bi bi-check-circle" ></i>
            </div>
            </div>
        </div>
        <div className='flex p-5 mx-auto text-xl'>
            {props.message}
        </div>
        <div className='p-2 mx-auto'>
          <btn 
          className="btn btn-green w-20" 
            onClick={()=>multicCall()}
          >
            ok
          </btn>
          
        </div>
    </Modal>
     
      
    </div>
  );
}

export default SuccessfulAction;