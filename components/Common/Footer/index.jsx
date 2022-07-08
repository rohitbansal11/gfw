import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"
const Footer = ({ links ,more }) => {
  return (
    <footer>
      <section className="flex py-10">
        <div className="flex w-[90%] max-w-[1500px] mx-auto flex-wrap">
          <div classname="w-[100%] md:w-[50%] lg:w-[28%]">
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
          <div className="w-[100%] mt-4 md:w-[50%] md:mt-0 lg:w-[15%]">
            <div className="mb-2 text-xl font-semibold">Quicklinks</div>
            <ul className="flex flex-col gap-1">
              {links.map((item) => (
                <li className="mb-1 border-b-2 border-white hover:border-black max-w-fit">
                  <Link href={item.href}>
                    <a>{item.text} </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[100%] mt-4 md:w-[50%] md:mt-0 lg:w-[15%]">
            <div className="mb-2 text-xl font-semibold">Morelinks</div>
            <ul className="flex flex-col gap-1">
              {more.map((item) => (
                <li className="mb-1 border-b-2 border-white hover:border-black max-w-fit">
                  <Link href={item.href}>
                    <a>{item.text} </a>
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
          <div className="w-[100%] mt-4 md:w-[50%] md:mt-0 lg:w-[23%] ">
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
      href: "/truck-parts",
      text: "Truck/Part Sale",
    },
    {
      href: "/car-sale",
      text: "Car Sale",
    },
    {
      href: "/ride-school",
      text: "Get School Ride",
    },
    {
      href: "/ride-oldage",
      text: "Get Oldage Ride",
    },
    {
      href: "/ride-airport",
      text: "Get Airport Ride",
    },
  ],
  more: [
    {
      href: "/loads",
      text: "Loads",
    },
    {
      href: "/rent-room",
      text: "Rent room",
    },
    {
      href: "/rent-home",
      text: "Rent home",
    },
    {
      href: "/local-store",
      text: "Local stores",
    },
    {
      href: "/local-workers",
      text: "Local workers",
    },
  ],
}
export default Footer
