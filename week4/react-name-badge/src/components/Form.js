import React from 'react';

class Form extends React.Component {
    render() { 
        return ( 
            <div className="container">
                <form className="card-outline" onSubmit={this.props.handleSubmit}>
                    <div className="grid">
                        <div>
                            <input
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                onChange={this.props.handleChange}
                            />
                            <br />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={this.props.handleChange}
                            />
                            <br />
                            <input
                                name="phone"
                                type="number"
                                placeholder="Phone"
                                onChange={this.props.handleChange}
                            />
                            <br />
                        </div>
                        <div>
                            <input
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                onChange={this.props.handleChange}
                            />
                            <br />
                            <input
                                name="placeOfBirth"
                                type="text"
                                placeholder="Place of Birth"
                                onChange={this.props.handleChange}
                            />
                            <br />
                            <input
                                name="favoriteFood"
                                type="text"
                                placeholder="Favorite Food"
                                onChange={this.props.handleChange}
                            />
                            <br />
                        </div>
                    </div>
                        <textarea className="response" name="responseText" onChange={this.props.handleChange} placeholder="Tell us about yourself" />
                        <div className="tc"><button>Submit</button></div>
                </form>
            </div>
        );
    }
}

export default Form;
