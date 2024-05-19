import { BrandFacebook, BrandInstagram, BrandTwitter } from 'tabler-icons-react';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between text-white'>
            <div className="contact text-center bg-[#1F2937] w-full py-10">
                <h3 className='text-2xl md:text-3xl font-medium my-6'>CONTACT US</h3>
                <div className='font-medium text-lg lg:text-xl space-y-3'>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>

            <div className="follow text-center bg-[#111827] w-full py-10">
                <h3 className='text-2xl md:text-3xl font-medium my-6'>FOLLOW US</h3>
                <p className='font-medium text-lg lg:text-xl'>Join us on social media</p>
                <div className="social-icons flex justify-center items-center gap-3 my-2">
                    <BrandFacebook size={32}></BrandFacebook>
                    <BrandInstagram size={32}></BrandInstagram>
                    <BrandTwitter size={32}></BrandTwitter>
                </div>
            </div>

            <div className='bg-black p-5 font-medium md:col-span-2 text-center'>
                <p>Designed by Programming Hero & Developed by Nawfs Ul Ahsun</p>
            </div>
        </div>
    );
};

export default Footer;