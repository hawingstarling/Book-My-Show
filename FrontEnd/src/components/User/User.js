import { edit } from '../../assets/icons'
import { obito } from '../../assets/image'
import classNames from 'classnames/bind';
import styles from './User.module.scss'

const cx = classNames.bind(styles)

function User() {
    return ( 
        <div className={cx('wrapper-user')}>
            <form action="#">
                <section className={cx('account-details', 'section-form')}>
                    <section className={cx('account-avatar')}>
                        <div className={cx('avatar')}>
                            <div className={cx('upload')}>
                                <img src={obito} alt="avatar" />
                                <div className={cx('edit')}>
                                    {/* <img src={edit} alt="edit avatar" /> */}
                                    {/* <img src="https://in.bookmyshow.com/chunks/icons/common-icons-81688d92.svg" alt="" /> */}
                                    <span>Edit</span>
                                </div>
                            </div>
                            <div className={cx('name-account')}>Hi, Guest</div>
                        </div>
                    </section>
                    <section className={cx('form-account-details', 'form-info')}>
                        <div className={cx('title-form')}>Account Details</div>
                        <div className={cx('form-email')}>
                            <div className={cx('label-email')}>Email Address</div>
                            <div className={cx('input-content')}>
                                <div>
                                    <span className={cx('email')}>dinhthanhtien2k2@gmail.com</span>
                                    <span className={cx('verified')}>Verified</span>
                                </div>
                                <div className={cx('email-edit')}>
                                    <span className={cx('icon-email-edit')}>
                                        {/* <p>icon</p> */}
                                    </span>
                                    <span className={cx('edit-p')}>Edit</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('form-phone')}>
                            <div className={cx('label-phone')}>Mobile Number</div>
                            <section className={cx('phone')}>
                                <div className={cx('add-phone')}>
                                    + Add Mobile Number
                                </div>
                                <div className={cx('whatsapp')}>Get a copy of the tickets on Whatsapp/SMS</div>
                            </section>
                        </div>
                    </section>
                </section>
                <div>
                    <section className={cx('personal-details', 'section-form')}>
                        <div className={cx('title-form')}>Personal Details</div>
                        <div className={cx('info')}>
                            <div className={cx('label-al')}>First Name</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="Enter first name here" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>Last Name</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="Enter last name here" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>Birthday (Optional)</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="Enter last name here" type="date" />
                                </div>
                            </div>
                        </div>

                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>Identity (Optional)</div>
                            <div className={cx('pick')}>
                                <div className={cx('input-radio')}>
                                    <input type="radio" id="F" value="F" name="gender" />
                                    <label htmlFor="F">Woman</label>
                                </div>
                                <div className={cx('input-radio')}>
                                    <input type="radio" id="M" value="M" name="gender" />
                                    <label htmlFor="F">Man</label>
                                </div>
                            </div>
                        </div>

                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>Married ? (Optional)</div>
                            <div className={cx('pick')}>
                                <div className={cx('input-radio')}>
                                    <input type="radio" id="Y" value="Y" name="married" />
                                    <label htmlFor="Y">Yes</label>
                                </div>
                                <div className={cx('input-radio')}>
                                    <input type="radio" id="N" value="N" name="married" />
                                    <label htmlFor="N">No</label>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    <section className={cx('personal-details', 'section-form')}>
                        <div className={cx('title-form')}>Address (Optional)</div>
                        <div className={cx('info')}>
                            <div className={cx('label-al')}>Area Pincode</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="E.g 56001" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>Address Line 1</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="Flat no., House no., Building," type="text" />
                                </div>
                            </div>
                        </div>
                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>Address Line 2</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="Area, Colony, Street, Sector, Village" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>Landmark</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="E.g Prithvi Theater" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>Town / City</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="E.g Mumbai" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className={cx('info', 'mt-info')}>
                            <div className={cx('label-al')}>State</div>
                            <div>
                                <div className={cx('wrapper-input')}>
                                    <input placeholder="E.g Maharashtra" type="text" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={cx('wrapper-rules')}>
                    <div className={cx('container-rules')}>
                        I agree to the
                        <a href="#"> Terms & Conditions</a> &
                        <a href="#"> Privacy Policy</a>
                    </div>
                </div>
            </form>
            <div className={cx('wrapper-button-save')}>
                <div className={cx('container-button-save')}>
                    <div>Save Changes</div>
                </div>
            </div>
        </div>
     );
}

export default User;