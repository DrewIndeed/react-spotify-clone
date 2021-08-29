import React from "react";
import "./ContinueWith.css";

function ContinueWith(props) {
  function changeOnEnter(e, special) {
    e.target.style.backgroundColor = `${props.textColor}`;
    e.target.style.color = `${props.backgroundColor}`;
  }

  function changeOnEnterSpecial(e) {
    e.target.style.opacity = 0.8;
  }
  function changeOnLeave(e) {
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = `${props.backgroundColor}`;
    e.target.style.color = `${props.textColor}`;
  }

  return (
    <a
      style={{
        color: `${props.textColor}`,
        backgroundColor: `${props.backgroundColor}`,
        border: `${props.border}`,
      }}
      onMouseEnter={props.isSpecial? changeOnEnterSpecial : changeOnEnter}
      onMouseOut={changeOnLeave}
      href="https://google.com"
    >
      {props.belongTo === 'facebook' && <img style={{width: '38px', marginRight: '8px'}} src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-White-Dark-Background-Logo.wine.svg" alt="facebook logo" />}
      {props.belongTo === 'apple' && <img style={{width: '16px', marginRight: '14px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxc6GVkD9qcBAwgOueY06yFTvG8yynqr4mVutEOsOaUfVHxw8072EUp-94LHwztWO94Q&usqp=CAU" alt="apple logo" />}
      {props.belongTo === 'google' && <img style={{width: '14px', marginRight: '12px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google logo" />}
      {props.belongTo === 'spotify' && <img style={{width: '50px', marginRight: '5px'}} src="https://www.queensjournal.ca/sites/default/files/img/story/2017/11/10/spotify-web.jpg" alt="spotify logo" />}
      {props.textContent}
    </a>
  );
}

export default ContinueWith;
