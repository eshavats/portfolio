import React from "react";

class ContactForm extends React.Component
{
    state = { name: "", email: "", subject: "", message: "" };

    render()
    {
        return (
            <form action="https://formspree.io/mwkrlqly" method="POST">
                <div class="modal-body mx-3">
                    <div class="md-form mb-5">
                    <label data-error="wrong" data-success="right" for="form34"><i class="fas fa-user prefix grey-text"></i> Your name</label>
                    <input 
                    type="text" 
                    id="form34" 
                    class="form-control validate" 
                    name="name" 
                    required 
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})} 

                    />
                    </div>
    
                    <div class="md-form mb-5">
                    <label data-error="wrong" data-success="right" for="form29"><i class="fas fa-envelope prefix grey-text"></i> Your email</label>
                    <input 
                    type="email" 
                    id="form29" 
                    class="form-control validate" 
                    name="email" 
                    required
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                     />
                    </div>
    
                    <div class="md-form mb-5">
                    <label data-error="wrong" data-success="right" for="form32"><i class="fas fa-tag prefix grey-text"></i> Subject</label>
                    <input 
                    type="text" 
                    id="form32" 
                    class="form-control validate" 
                    name="subject" 
                    required
                    value={this.state.subject}
                    onChange={e => this.setState({subject: e.target.value})}
                     />
                    </div>
    
                    <div class="md-form">
                    <label data-error="wrong" data-success="right" for="form8"><i class="fas fa-pencil-alt prefix grey-text"></i> Your message</label>
                    <textarea 
                    type="text" 
                    id="form8" 
                    class="md-textarea form-control" 
                    rows="4" 
                    name="message" 
                    required
                    value={this.state.message}
                    onChange={e => this.setState({message: e.target.value})}
                    ></textarea>
                    </div>
    
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button onClick={() => console.log(this.state)} class="btn btn-danger send">Send <i class="fas fa-paper-plane"></i></button>
                </div>
                </form>
        );
    }
}

export default ContactForm;