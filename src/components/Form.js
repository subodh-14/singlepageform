import React from 'react'
import "./form.css";

const Form = () => {
    return (
        <>
            <form>

                <div class="form-group  needs-validation form__main" novalidate>
                    <div className="form__head">
                        <h5 className="form__h5">Sign up with</h5>
                        <div>
                            <i className="zmdi form__iconsg zmdi-hc-lg zmdi-google"></i> <i className="zmdi form__iconsf zmdi-hc-lg zmdi-facebook"></i>
                        </div>
                        <h6 className="form__h6">Or Sign up with credentials</h6>
                    </div>
                    <div className="form__contents">
                        <div className="row">
                            <div className="col">
                                <label className="form__labeltext"  htmlFor="firstname" >FIRSTNAME</label>
                                <input type="text" class="form-control is-invalid" id="firstname" placeholder="FirstName" required="true" />
                                <div class="invalid-feedback">
                                    Required
                                </div>
                            </div>
                            <div className="col">
                                <label className="form__labeltext" htmlFor="lastname" >LASTNAME</label>
                                <input type="text" class="form-control is-invalid" id="lastname" placeholder="LastName" required="true" />
                                <div class="invalid-feedback">
                                    Required
                                </div>
                            </div>
                        </div>
                        <div className="form__email">
                            <label className="form__labeltext " htmlFor="email" >EMAIL</label>
                            <input type="email" class="form-control is-invalid" id="email" placeholder="Email/Username" required="true" />
                            <div class="invalid-feedback">
                                Required
                            </div>
                        </div>
                        <div>
                            <label className="form__labeltext " htmlFor="password" >PASSWORD</label>
                            <input type="password" class="form-control is-invalid" id="password" placeholder="Password" required="true" />
                            <div class="invalid-feedback">
                                Required
                            </div>
                        </div>

                        <div class="form-group form-check form__checks">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I agree to accept WebGlory<a href="#">Service agreements </a>
                                and <a href="#">Privacy Policy</a>
                            </label>


                        </div>
                        <button type="button" class="btn btn-dark  btn-lg btn-block">CREATE ACCOUNT</button>
                    </div>
                </div>

            </form>

            <div className="form__footer">
                <h6>Already have Account?<a href="#">Login</a></h6>
            </div>
        </>
    )
}

export default Form
