import React, { useState, useRef, useEffect, useCallback } from 'react';
import CloseIcon from "../images/cross_head.webp";
import { PhoneIcon, MailIcon, ChatAltIcon } from "@heroicons/react/solid";
import emailjs from 'emailjs-com'

export const ModalForm = ({showModal, setShowModal}) => {
    const modalRef = useRef();
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);   
        }
				if (e.key === 'Escape' && isSubmit) {
					setIsSubmit(false);
				}
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );

    const initialValues = { name: "", email: "", phone: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
      switch (name) {
        case "email":
          delete formErrors.email;
        case "phone":
          delete formErrors.phone;
        case "graduation":
          delete formErrors.graduation;
      }

    };
    const handleSubmit = (event) => {
      event.preventDefault();			
      let errors = validate(formValues);			
			setFormErrors(errors);
			if (Object.keys(errors).length === 0) {
				emailjs.sendForm('service_9op7uj3', 'template_b7i1qy9', event.target, '3vmuR0ErzxVHYZeNw')
				.then(res => {
					console.log(res)
				}).catch(err => console.log(err));
				setShowModal(false);
				setIsSubmit(true);
				setFormValues(initialValues);
			}				
    };

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const phoneRegex =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i;
      const year = /^(19|20)\d{2}$/i;
      if (!regex.test(values.email)) {
        errors.email = "This is not a valid Email!";
      }
      if (!phoneRegex.test(values.phone)) {
        errors.phone = "This is not a valid Phone Number!";
      }
      if (!year.test(values.graduation)) {
        errors.graduation = "This is not a valid year";
      }
	  setFormErrors(errors);
	  return errors;
    };

    return <>
		{showModal ? ( 
			<div>
        <div className="fixed h-[100%] w-[100%] z-[10000] backdrop-blur-sm bg-white/30 flex items-center justify-center" onClick={closeModal} ref={modalRef}>
					<div className="relative mx-4 bg-white shadow-2xl rounded-2xl top-12">
						<form							
							onSubmit={handleSubmit}
							className="flex flex-col max-w-md px-8 mb-2 space-y-4"
						>
							<div className="flex items-center justify-between">
								<h1 className="mt-5 text-lg font-bold">Register</h1>
								<img
									src={CloseIcon}
									onClick={() => setShowModal(prev => !prev)}
									alt="close"									
									className='w-4 h-4 cursor-pointer'
								/>
							</div>
							<div className="overflow-y-scroll h-[58vh] pr-10 pl-1">
								<div>
									<label htmlFor="" className="text-sm font-medium required">
										Name
									</label>

									<input
										type="text"
										placeholder="Enter your name"
										required
										name="name"
										value={formValues.name}
										onChange={handleChange}
										class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 text-[12px] outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
								<p className=" text-[12px] text-red-500 relative bottom-4 ">
									{formErrors.name}
								</p>

								<div className="mt-6">
									<label htmlFor="" className="text-sm font-medium required">
										Email
									</label>

									<MailIcon className="relative z-10 h-5 text-gray-300 top-4 left-2" />
									<input
										type="text"
										placeholder="name@example.com"
										required
										name="email"
										value={formValues.email}
										onChange={handleChange}
										class="ring-1 ring-gray-300 w-full text-[12px]  rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
								<p className="text-red-500 relative bottom-4 text-[12px] ">
									{formErrors.email}
								</p>
								<div>
									<label htmlFor="" className="text-sm font-medium required">
										Phone Number
									</label>

									<PhoneIcon className="relative z-10 h-5 text-gray-300 top-4 left-2" />
									<input
										type="text"
										placeholder="Enter your number here"
										required
										name="phone"
										onChange={handleChange}
										value={formValues.phone}
										class="ring-1 ring-gray-300 w-full text-[12px]  rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
								<p className="text-red-500 relative bottom-4 text-[12px]">
									{formErrors.phone}
								</p>
								<div>
									<label htmlFor="" className="text-sm font-medium required">
										College
									</label>
									<input
										type="text"
										placeholder="Enter your college name here"
										required
										name="college"
										class="ring-1 ring-gray-300 w-full text-[12px] rounded-md relative bottom-5 px-4 py-2 mt-8 outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
								<div>
									<label htmlFor="" className="text-sm font-medium required">
										Course
									</label>
									<select
										required
										name="course"
										class="ring-1 ring-gray-300 w-full text-gray-400 text-[12px] rounded-md relative bottom-5 px-4 py-2 mt-8 outline-none focus:ring-2 focus:ring-blue-600"
									>
										<option value="" disabled selected hidden className="">
											Select any course
										</option>
										<option value="btech" className="text-black">
											B.Tech
										</option>
										<option value="bsc" className="text-black">
											B.Sc.
										</option>
										<option value="mtech" className="text-black">
											M.Tech
										</option>
										<option value="idd" className="text-black">
											IDD
										</option>
										<option value="other" className="text-black">
											Other
										</option>
									</select>
								</div>
								<div>
									<label htmlFor="" className="text-sm font-medium required">
										Graduation Year
									</label>
									<input
										type="text"
										placeholder="Enter your graduation year here"
										required
										onChange={handleChange}
										value={formValues.graduation}
										name="graduation"
										class="ring-1 ring-gray-300 w-full text-[12px] rounded-md relative bottom-5 px-4 py-2 mt-8 outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
								<p className="text-red-500 relative bottom-4 text-[12px] ">
									{formErrors.graduation}
								</p>
								<div>
									<label htmlFor="" className="text-sm font-medium">
										Interested in
									</label>
									<select
										name="subject"
										class="ring-1 ring-gray-300 w-full text-gray-400 text-[12px] rounded-md relative bottom-5 px-3 py-2 mt-8 outline-none focus:ring-2 focus:ring-blue-600"
									>
										<option value="" disabled selected hidden className="">
											Select the program you are interested
										</option>
										<option value="mas101" className="text-black">
											MAS101
										</option>
										<option value="mas102" className="text-black">
											MAS102
										</option>
										<option value="ts1" className="text-black">
											TS1
										</option>
										<option value="ts2" className="text-black">
											TS2
										</option>
										<option value="ts3" className="text-black">
											TS3
										</option>
									</select>
								</div>
								<div>
									<label htmlFor="" className="text-sm font-medium">
										Write to Us
									</label>
									<ChatAltIcon className="relative z-10 h-5 text-gray-300 top-5 left-2" />
									<textarea
										name="message"
										placeholder="Type your message here"
										rows="4"
										class="ring-1 ring-gray-300 w-full text-[12px] rounded-md relative bottom-5 px-10 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
							</div>
							<div className="my-4 marked">Marked fields are mandatory</div>
							<button className="w-[83%] bg-blue-700 text-white font-bold rounded-lg py-3 uppercase text-sm ">
								Submit
							</button>							
						</form>
					</div>
      	</div>
    	</div> )
    : null}
		{Object.keys(formErrors).length === 0 && isSubmit ? 
			<div className="fixed h-[100%] w-[100%] z-[10000] backdrop-blur-sm bg-white/30 flex items-center justify-center">				
				<div className="relative flex flex-col items-center max-w-md px-12 py-8 space-y-8 shadow-2xl bg-card rounded-2xl">
					<img
						src={CloseIcon}
						onClick={() => setIsSubmit(false)}
						alt="close"									
						className="absolute w-4 h-4 cursor-pointer right-5 top-5"
					/>
					<div className="">
						<p className="mb-2 font-serif text-xl text-center text-green-400">Your response has been submitted successfully.</p>
						<p className="text-base text-center text-slate-800">We will get back to you shortly.</p>
					</div>
					<button className="px-8 py-2 text-lg text-white bg-blue-600 shadow-xl rounded-xl" onClick={() => setIsSubmit(false)}>Okay, Got it</button>
				</div>
			</div>			
			: null
		}
	</>;
    
}