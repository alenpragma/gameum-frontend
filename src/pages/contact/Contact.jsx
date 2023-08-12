import Description from "../../components/Description";
import Heading from "../../components/Heading";
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="space-y-5 mb-10 pt-20 lg:w-1/2 mx-auto">
                <Heading heading="Contact" />
                <Description description="Contact With Us" />
            </div>
            <div className="lg:flex justify-center items-center max-w-7xl mx-auto pb-20">
                <div className="lg:w-1/2 p-10 space-y-8">
                   <div>
                   <h2 className="text-2xl font-bold">Contact Information</h2>
                    <p>Fill up the form and our team will get back to you within 24 hours.</p>
                   </div>
                    <p>youtube.com</p>
                    <p>gameum@gmail.com</p>
                    <p>65 St. Road, NY USA, Brooklyn, NY, United States, New York</p>
                    <div>
                        <h2>Social</h2>
                    </div>
                </div>
                <div className="lg:w-1/2 p-10 shadow-lg shadow-slate-700 rounded">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="mb-5">
                            <h2 className="text-2xl font-bold">Get In touch</h2>
                            <p>We are here for you. How we can help?</p>
                        </div>
                        <div className="flex justify-start gap-5 mb-5">
                            <input className="w-1/2 p-1 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("firstname", { required: true })} placeholder="First Name" />
                            <input className="w-1/2 p-1 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("lasttname", { required: true })} placeholder="Last Name" />
                        </div>
                        <div className="flex justify-start gap-5 mb-5">
                            <input className="w-1/2 p-1 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("email", { required: true })} placeholder="Eamil Address" />
                            <input className="w-1/2 p-1 outline outline-1 outline-[#335560] rounded-md text-black" type="text" {...register("phone", { required: true })} placeholder="Phone Number" />
                        </div>
                        <div>
                            <textarea className="p-2 rounded outline outline-1 outline-[#335560] h-24 w-full text-black" {...register("message", { required: true })}  placeholder="Message"></textarea>
                        </div>

                        <input className="w-full py-2 font-bold bg-[#0E69C6] rounded mt-4 text-white" type="submit" value="Submit Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;