import React from 'react';
import './ToolsImg.css';

function ToolsImg({ img, name }) {
    return (
        <div className="tools_comp">
            <div className="tools_comp_img">
                <img src={img} alt="" />
            </div>
            <div className="tools_comp_name">
                {name}
            </div>
        </div>
    )
}

export default ToolsImg;
