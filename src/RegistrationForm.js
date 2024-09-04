import React from 'react'
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik'
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';
export const RegistrationForm = () => {
  return (
    <div className='container'>RegistrationForm
        <div className='row justify-content-center'>
        <Formik
        initialValues={
            {
                firstname:"",
                lastname:"",
                email:"",
                gender:"",
                jobrole:"",
                about:"",
                password:"",
                confirmpassword:""
            }
        }
        validationSchema={Yup.object(
            {      
                firstname:Yup.string().required("firstname is required"),
                lastname: Yup.string().required("lastname is must"),
                gender:Yup.string().required("pl select gender"),
                password:Yup.string().required("password is must"),
                confirmpassword:Yup.string().required("confirmpassword is must")
                .oneOf([Yup.ref("password"),null], "Password do not match") ,
                email:Yup.string().email("Invalid email").required("email is requied"),
                about:Yup.string().required("enter ").max(10, "charcters shoiud be max 200"),
                jobrole:Yup.string().required("job role is needed")
                .oneOf(["developer", "tester", "qa"], "Not a valid Job Role")
            }
            )}       
        onSubmit={(values, {setSubmiiting})=>
        {
            console.log(values)
            console.log(JSON.stringify(values));
        }}
        >
            <Form>
                <div className='row'>
                    <div className="col-md=6"> 
                <label> Enter firstname</label>
                <Field type="text" name="firstname"/>
                <ErrorMessage name="firstname" component="label" className='form-label text-danger'/>
                </div>
                </div>
                <div> 
                    <label> Enter lastname</label>
                <Field type="text" name="lastname"/>
                <ErrorMessage name="lastname" component="label"/>
                </div>

                <div> 
                    <label> Enter email</label>
                <Field type="email" name="email"/>
                <ErrorMessage name="email" component="label"/>
                </div>

                <div> 
                    <label> Enter password</label>
                <Field type="password" name="password"/>
                <ErrorMessage name="password" component="label"/>
                </div>

                <div> 
                <label> Confirm Password</label>
                <Field type="text" name="confirmpassword"/>
                <ErrorMessage name="confirmpassword" component="label"/>
                </div>

                <div> 
                 <label> Write something 
                    about you</label>
                <Field as="textarea" name="about"/>
                <ErrorMessage name="about" component="label"/>
             
                </div>
    
                <div> 
                 <label> Select Job Role </label>
                <Field as="select" name="jobrole">
                    <option value=""> Select Job Role </option>
                    <option value="developer"> Developer </option>
                    <option value="tester"> Tester </option> 
                    <option value="qa"> QA </option>
                </Field>
                <ErrorMessage name="jobrole" component="label"/>
             
                </div>

                <div>
                    <label> Select Gender </label>
                    <Field type="radio" name="gender" value="0"/> Male 
                    <Field type="radio" name="gender" value="1"/> Female  
                    <ErrorMessage name="gender" component="label"/>
             
                </div>
    
                <Button variant='primary' type='submit'> Submit </Button>
            </Form>
        </Formik>
        </div>         
    </div>
  )
}
