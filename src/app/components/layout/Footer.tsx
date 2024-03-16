"use client"
import React from "react";
import Image from "next/image";


// TODO: fix dir


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="rounded-t rounded-xl shadow-2xl  bg-black w-full footer section "   style={{ backgroundImage: "url('/images/footer-bg.png')", }}
  >
  <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div className="col-span-full lg:col-span-1">
        <a className="flex-none text-xl font-custom text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-label="Brand">
          <Image src="/images/logo.png" width={170} height={50} alt="logo"></Image>
        </a>
        <div className="mt-3 grid space-y-3">
          <p><a className="font-custom inline-flex gap-x-2 text-gray-400  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >Experience the perfect blend of safety, fashion, and comfort, meticulously designed for your ultimate head protection. </a></p>

        </div>
      </div>


      <div className="col-span-1">
        <h2 className="font-custom text-white">Product</h2>

        <div className="mt-3 grid space-y-3">
          <p><a className="font-custom   inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Pricing</a></p>
          <p><a className="font-custom   inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Changelog</a></p>
          <p><a className="font-custom   inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Docs</a></p>
        </div>
      </div>


      <div className="col-span-1">
        <h2 className="font-custom text-white">LINKS</h2>

        <div className="mt-3 grid space-y-3">
          <p><a className="font-custom inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">About us</a></p>
          <p><a className="font-custom inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Products</a></p>
          <p><a className="font-custom inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">R&D</a> </p>
          <p><a className="font-custom inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Contact</a></p>
        </div>
      </div>


      <div className="col-span-2">
        <h2 className="font-custom text-gray-100">Stay up to date</h2>

        <form>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-gray-800">
            <div className="w-full">
              <label htmlFor="hero-input" className="sr-only">Search</label>
              <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-400 " placeholder="Enter your email"/>
            </div>
            <a className="w-full sm:w-auto whitespace-nowrap p-3 font-custom inline-flex justify-center items-center gap-x-2 text-sm font-custom rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
              Subscribe
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-400">
          Subscribe to our newsletter to get our latest updates
          </p>
        </form>
      </div>

    </div>


    <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">© {currentYear} LandHelmet. All rights reserved.</p>
      </div>
  
      <div>
        <a className="size-10 font-custom inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://www.linkedin.com/company/landhelmets/">
        <svg className="flex-shrink-0 size-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#c2c9d6" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
        </a>
        <a className="size-10 font-custom inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://www.instagram.com/landhelmetsca/">
      <svg className="flex-shrink-0 size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7.90001C11.1891 7.90001 10.3964 8.14048 9.72218 8.59099C9.04794 9.0415 8.52243 9.68184 8.21211 10.431C7.90179 11.1802 7.8206 12.0046 7.9788 12.7999C8.13699 13.5952 8.52748 14.3258 9.10088 14.8992C9.67427 15.4725 10.4048 15.863 11.2001 16.0212C11.9955 16.1794 12.8198 16.0982 13.569 15.7879C14.3182 15.4776 14.9585 14.9521 15.409 14.2779C15.8596 13.6036 16.1 12.8109 16.1 12C16.1013 11.4612 15.9962 10.9275 15.7906 10.4295C15.585 9.93142 15.2831 9.47892 14.9021 9.09794C14.5211 8.71695 14.0686 8.415 13.5706 8.20942C13.0725 8.00385 12.5388 7.8987 12 7.90001ZM12 14.67C11.4719 14.67 10.9557 14.5134 10.5166 14.22C10.0776 13.9267 9.73534 13.5097 9.53326 13.0218C9.33117 12.5339 9.2783 11.9971 9.38132 11.4791C9.48434 10.9612 9.73863 10.4854 10.112 10.112C10.4854 9.73863 10.9612 9.48434 11.4791 9.38132C11.9971 9.2783 12.5339 9.33117 13.0218 9.53326C13.5097 9.73534 13.9267 10.0776 14.22 10.5166C14.5134 10.9557 14.67 11.4719 14.67 12C14.67 12.7081 14.3887 13.3873 13.888 13.888C13.3873 14.3887 12.7081 14.67 12 14.67ZM17.23 7.73001C17.23 7.9278 17.1714 8.12114 17.0615 8.28558C16.9516 8.45003 16.7954 8.57821 16.6127 8.65389C16.43 8.72958 16.2289 8.74938 16.0349 8.7108C15.8409 8.67221 15.6628 8.57697 15.5229 8.43712C15.3831 8.29727 15.2878 8.11909 15.2492 7.92511C15.2106 7.73112 15.2304 7.53006 15.3061 7.34733C15.3818 7.16461 15.51 7.00843 15.6744 6.89855C15.8389 6.78866 16.0322 6.73001 16.23 6.73001C16.4952 6.73001 16.7496 6.83537 16.9371 7.02291C17.1247 7.21044 17.23 7.4648 17.23 7.73001ZM19.94 8.73001C19.9691 7.48684 19.5054 6.28261 18.65 5.38001C17.7522 4.5137 16.5474 4.03897 15.3 4.06001C14 4.00001 10 4.00001 8.70001 4.06001C7.45722 4.0331 6.25379 4.49652 5.35001 5.35001C4.49465 6.25261 4.03093 7.45684 4.06001 8.70001C4.00001 10 4.00001 14 4.06001 15.3C4.03093 16.5432 4.49465 17.7474 5.35001 18.65C6.25379 19.5035 7.45722 19.9669 8.70001 19.94C10.02 20.02 13.98 20.02 15.3 19.94C16.5432 19.9691 17.7474 19.5054 18.65 18.65C19.5054 17.7474 19.9691 16.5432 19.94 15.3C20 14 20 10 19.94 8.70001V8.73001ZM18.24 16.73C18.1042 17.074 17.8993 17.3863 17.6378 17.6478C17.3763 17.9093 17.064 18.1142 16.72 18.25C15.1676 18.5639 13.5806 18.6715 12 18.57C10.4228 18.6716 8.83902 18.564 7.29001 18.25C6.94608 18.1142 6.63369 17.9093 6.37223 17.6478C6.11076 17.3863 5.90579 17.074 5.77001 16.73C5.35001 15.67 5.44001 13.17 5.44001 12.01C5.44001 10.85 5.35001 8.34001 5.77001 7.29001C5.90196 6.94268 6.10547 6.62698 6.36733 6.36339C6.62919 6.09981 6.94355 5.89423 7.29001 5.76001C8.83902 5.44599 10.4228 5.33839 12 5.44001C13.5806 5.33856 15.1676 5.44616 16.72 5.76001C17.064 5.89579 17.3763 6.10076 17.6378 6.36223C17.8993 6.62369 18.1042 6.93608 18.24 7.28001C18.66 8.34001 18.56 10.84 18.56 12C18.56 13.16 18.66 15.67 18.24 16.72V16.73Z" fill="#c2c9d6"></path> </g></svg>
        </a>
        <a className="size-10 font-custom inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="tel:+1 (657) 319-5842">
        <svg className="flex-shrink-0 size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#c2c9d6"></path> </g></svg>
        </a>
        <a className="size-10 font-custom inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://maps.app.goo.gl/RP5YftAwkf4wGeNk6">
        <svg className="flex-shrink-0 size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8.70938C3 7.23584 3 6.49907 3.39264 6.06935C3.53204 5.91678 3.70147 5.79466 3.89029 5.71066C4.42213 5.47406 5.12109 5.70705 6.51901 6.17302C7.58626 6.52877 8.11989 6.70665 8.6591 6.68823C8.85714 6.68147 9.05401 6.65511 9.24685 6.60952C9.77191 6.48541 10.2399 6.1734 11.176 5.54937L12.5583 4.62778C13.7574 3.82843 14.3569 3.42876 15.0451 3.3366C15.7333 3.24444 16.4168 3.47229 17.7839 3.92799L18.9487 4.31624C19.9387 4.64625 20.4337 4.81126 20.7169 5.20409C21 5.59692 21 6.11871 21 7.16229V15.2907C21 16.7642 21 17.501 20.6074 17.9307C20.468 18.0833 20.2985 18.2054 20.1097 18.2894C19.5779 18.526 18.8789 18.293 17.481 17.827C16.4137 17.4713 15.8801 17.2934 15.3409 17.3118C15.1429 17.3186 14.946 17.3449 14.7532 17.3905C14.2281 17.5146 13.7601 17.8266 12.824 18.4507L11.4417 19.3722C10.2426 20.1716 9.64311 20.5713 8.95493 20.6634C8.26674 20.7556 7.58319 20.5277 6.21609 20.072L5.05132 19.6838C4.06129 19.3538 3.56627 19.1888 3.28314 18.7959C3 18.4031 3 17.8813 3 16.8377V8.70938Z" stroke="#c2c9d6" strokeWidth="1.5"></path> <path opacity="0.5" d="M9 6.63867V20.5" stroke="#c2c9d6" strokeWidth="1.5"></path> <path opacity="0.5" d="M15 3V17" stroke="#c2c9d6" strokeWidth="1.5"></path> </g></svg>
        </a>
        <a className="size-10 font-custom inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="mailto:info@landhelmets.com">
        <svg className="flex-shrink-0 size-5"  viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"   fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" > <g id="Icon-Set"  transform="translate(-412.000000, -259.000000)" fill="#c2c9d6"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail" > </path> </g> </g> </g></svg>
        </a>
     
      </div>

    </div>
  </div>
</footer>

  );
};

export default Footer;