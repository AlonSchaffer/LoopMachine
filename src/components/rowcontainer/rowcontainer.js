import React from "react";
import './rowcontainer.css'
export default function RowContainer(props) {
return <div className='RowContainer'>
{props.children}
</div>
}
