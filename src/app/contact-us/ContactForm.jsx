"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/contact-details";
import Swal from "sweetalert2";

import { pb } from "@/lib/pocketbase";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const sendData = {
      name: data.name,
      subject: data.subject,
      email: data.email,
      phone_number: data.MobileNumber,
      message: data.message,
    };
    reset();
    try {
      sendEmail(data).then((status) => {
        if (status === true) {
          window.gtag('event', 'contact_form_submission', {
            'event_category': 'contact_form',
            'event_label': 'form_submission'
          });
          router.push("/contact-us");
        }
      });
      const res = await pb.collection("contact").create(sendData);
      if (typeof window !== 'undefined') {
      window.gtag('event', 'contact_form_submission', {
        'event_category': 'contact_form',
        'event_label': 'form_submission'
      });}
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        className="submit-form"
      >
        <div className="mt-4 grid md:grid-cols-2  justify-center">
          <div>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              className=" border-b-[1px]   m-4 p-2 border-[#085FA0] rounded-sm"
              placeholder="Name*"
              type="text"
            />
            {errors?.name && (
              <p className="text-red-600 text-sm px-4">Name is required*</p>
            )}
          </div>
          <div>
            <input
              {...register("subject", {
                required: true,
                maxLength: 20,
              })}
              placeholder="Subject*"
              className=" border-b-[1px] m-4 p-2 border-[#085FA0]  rounded-sm"
              type="text"
            />
            {errors?.subject && (
              <p className="text-red-600 text-sm px-4">Subject is required*</p>
            )}
          </div>
          <div>
            <input
              {...register("email", { required: true, maxLength: 30 })}
              placeholder="Email Address*"
              className=" border-b-[1px] m-4 p-2 border-[#085FA0] rounded-sm"
              type="email"
            />
            {errors?.email && (
              <p className="text-red-600 text-sm px-4">
                Email Address is required*
              </p>
            )}
          </div>
          <div>
            <input
              {...register("MobileNumber", {
                minLength: 10,
                required: true,
                maxLength: 10,
              })}
              type="number"
              placeholder="Mobile Number*"
              maxLength={10}
              className=" remove-arrow border-b-[1px]  m-4 p-2  border-[#085FA0] rounded-sm"
            />
            {errors?.MobileNumber && (
              <p className="text-red-600 px-4 text-sm">
                Valid Mobile Number is required*
              </p>
            )}
          </div>
          <textarea
            {...register("message", {
              maxLength: 400,
            })}
            maxLength={400}
            placeholder="Message"
            className="  h-[100px] md:col-span-2 p-2 m-4  border-b-[1px]  border-[#085FA0] rounded-sm"
          ></textarea>
          {/* </div> */}
        </div>
        <button className="bg-[#1F2E4D] font-bold mt-4 flex justify-center opacity-90 hover:opacity-100  w-1/3 mx-auto p-2 rounded-md text-[#FFFF]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
