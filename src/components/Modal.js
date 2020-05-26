import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

class Modal extends React.Component
{

    render()
    {
        return ReactDOM.createPortal(
            <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">{this.props.header}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {this.props.content}
                </div>
            </div>
            </div>,
            document.getElementById("modal")
        );
    }
    
}

export default Modal;