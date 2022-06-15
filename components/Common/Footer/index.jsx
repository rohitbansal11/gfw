import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"
const Footer = ({ links }) => {
  return (
    <footer>
      <section className="flex py-10">
        <div className="flex w-[90%] max-w-[1400px] mx-auto flex-wrap">
          <div classname="w-[100%] md:w-[50%] lg:w-[30%]">
            <Image src="/images/gudguru-logo.png" height={90} width={160} />
            <p className="w-[40ch] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              nunc ac a magna at elementum.{" "}
            </p>
            <div className="flex gap-3">
              <Link href="/">
                <a>
                  <Image
                    src="/images/social/facebook-logo.png"
                    height={30}
                    width={30}
                    alt="Facebook"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Image
                    src="/images/social/twitter.png"
                    height={30}
                    width={30}
                    alt="Facebook"
                  />
                </a>
              </Link>
              <Link href="/">
                <a>
                  {" "}
                  <Image
                    src="/images/social/youtube.png"
                    height={30}
                    width={30}
                    alt="Facebook"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-[100%] mt-4 md:w-[50%] md:mt-0 lg:w-[20%]">
            <div className="mb-2 text-xl font-semibold">Quicklinks</div>
            <ul className="flex flex-col gap-1">
              {links.map((item) => (
                <li className="mb-1 border-b-2 border-white hover:border-black max-w-fit">
                  <Link href={item.href}>
                    <a>{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[100%] mt-4 md:w-[50%] md:mt-0 lg:w-[20%]">
            <div className="mb-2 text-xl font-semibold">Contact Us</div>
            <ul className="flex flex-col gap-1">
              <li className="mb-1">
                <Link href="/">
                  <a>(+91) 254. 254. 254</a>
                </Link>
              </li>
              <li className="mb-1 text-indigo-700 font-medium">
                <Link href="mailto:info@gudsguru.com">
                  <a>Info@gudsguru.com</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-[100%] mt-4 md:w-[50%] md:mt-0 lg:w-[26%] ">
            <div className="mb-2 text-xl font-semibold">Auxillary Links</div>
            <ul className="flex flex-col gap-1">
              <li className="mb-1 border-b-2 border-white hover:border-black max-w-fit">
                <Link href="/term-conditions">
                  <a>Terms and conditions</a>
                </Link>
              </li>
              <li className="mb-1 border-b-2 border-white hover:border-black max-w-fit">
                <Link href="/faq">
                  <a>FAQs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="py-2 bg-red-600 flex  text-white">
        <div className="w-[90%] max-w-[1400px] mx-auto flex justify-between items-center flex-col md:flex-row">
          <div>All rights reserved | Jobsdekho 2022</div>
          <div className="flex gap-2">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">
              <a>
                Site <span className="text-indigo-700">Credit</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
Footer.defaultProps = {
  links: [
    {
      href: "/",
      text: "Loads",
    },
    {
      href: "/truck-part-sale",
      text: "Truck & Part Sale",
    },
    {
      href: "/car-sale",
      text: "Car Sale",
    },
    {
      href: "/jobs",
      text: "Jobs",
    },
    {
      href: "/get-ride",
      text: "Get Ride",
    },
    {
      href: "/rent",
      text: "Rent",
    },
  ],
}
export default Footer
