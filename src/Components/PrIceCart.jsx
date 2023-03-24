import React from "react";
import "../App.css";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import 'bootstrap/dist/css/bootstrap.min.css';

function PriceCart(props){
   
    return(
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.value.plan}</h5>
            <h6 className="card-price text-center">{props.value.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.value.userEnabler && props.value.highlight ? "fw-bold": ""}><span className="fa-li"><i className="fas fa-check">{props.value.userEnabler ? <CheckIcon /> : <CloseIcon />}</i></span>{props.value.user}</li>
              <li className={props.value.storageEnabler? "": "text-muted"}><span className="fa-li"><i className="fas fa-check"></i>{props.value.storageEnabler ? <CheckIcon /> : <CloseIcon />}</span>{props.value.storage}</li>
              <li className={props.value.publicProjectsEnabler? "": "text-muted"}><span className="fa-li"><i className="fas fa-check"></i>{props.value.publicProjectsEnabler ? <CheckIcon /> : <CloseIcon />}</span>{props.value.publicProjects}</li>
              <li className={props.value.communityAccessEnabler? "": "text-muted"}><span className="fa-li"><i className="fas fa-check"></i>{props.value.communityAccessEnabler ? <CheckIcon /> : <CloseIcon />}</span>{props.value.communityAccess}</li>
              <li className={props.value.privateProjectsEnabler? "": "text-muted"}><span className="fa-li"><i className="fas fa-times">{props.value.privateProjectsEnabler ? <CheckIcon /> : <CloseIcon />}</i></span>{props.value.privateProjects}</li>
              <li className={props.value.phoneSupportEnabler? "": "text-muted"}><span className="fa-li"><i className="fas fa-times">{props.value.phoneSupportEnabler ? <CheckIcon /> : <CloseIcon />}</i></span>{props.value.phoneSupport}</li>
              <li className={props.value.subDomainEnabler ? "": "text-muted"}><span className="fa-li"><i className="fas fa-times">{props.value.subDomainEnabler ? <CheckIcon /> : <CloseIcon />}</i></span>{props.value.subDomain}</li>
              <li className={props.value.statusPlanEnabler? "": "text-muted"}><span className="fa-li"><i className="fas fa-times">{props.value.statusPlanEnabler ? <CheckIcon /> : <CloseIcon />}</i></span>{props.value.statusPlan}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default PriceCart;