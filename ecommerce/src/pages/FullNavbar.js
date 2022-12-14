import React from "react";
import "./FullNavbar.css"

export default function FullNavbar() {
  return (
    <div className="navbar">
      <p className="logos">E-stores</p>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for stores, products and categories"
          className="navSearchBar"
        />
        <button className="searchIcon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1957 20.526C13.4729 20.5255 15.6844 19.7632 17.4782 18.3605L23.118 24L24.9321 22.186L19.2923 16.5465C20.6959 14.7526 21.4587 12.5407 21.4592 10.263C21.4592 4.60423 16.8547 0 11.1957 0C5.53661 0 0.932129 4.60423 0.932129 10.263C0.932129 15.9217 5.53661 20.526 11.1957 20.526ZM11.1957 2.56575C15.4409 2.56575 18.8933 6.01796 18.8933 10.263C18.8933 14.508 15.4409 17.9602 11.1957 17.9602C6.95041 17.9602 3.49801 14.508 3.49801 10.263C3.49801 6.01796 6.95041 2.56575 11.1957 2.56575Z"
              fill="#FCFCFC"
            />
          </svg>
        </button>
      </div>
      <div className="account-section">
        <div className="account">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.364 8.72692C16.364 9.88423 15.9043 10.9941 15.0859 11.8125C14.2676 12.6308 13.1577 13.0906 12.0004 13.0906C10.843 13.0906 9.73314 12.6308 8.9148 11.8125C8.09646 10.9941 7.63672 9.88423 7.63672 8.72692C7.63672 7.56961 8.09646 6.4597 8.9148 5.64136C9.73314 4.82302 10.843 4.36328 12.0004 4.36328C13.1577 4.36328 14.2676 4.82302 15.0859 5.64136C15.9043 6.4597 16.364 7.56961 16.364 8.72692ZM14.1822 8.72692C14.1822 9.30557 13.9523 9.86053 13.5431 10.2697C13.134 10.6789 12.579 10.9087 12.0004 10.9087C11.4217 10.9087 10.8667 10.6789 10.4576 10.2697C10.0484 9.86053 9.81854 9.30557 9.81854 8.72692C9.81854 8.14826 10.0484 7.59331 10.4576 7.18414C10.8667 6.77497 11.4217 6.5451 12.0004 6.5451C12.579 6.5451 13.134 6.77497 13.5431 7.18414C13.9523 7.59331 14.1822 8.14826 14.1822 8.72692Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.37273 0 0 5.37273 0 12C0 18.6273 5.37273 24 12 24C18.6273 24 24 18.6273 24 12C24 5.37273 18.6273 0 12 0ZM2.18182 12C2.18182 14.28 2.95964 16.3789 4.26327 18.0458C5.1788 16.8435 6.35989 15.8692 7.71429 15.1989C9.06869 14.5286 10.5597 14.1805 12.0709 14.1818C13.5625 14.1804 15.0348 14.5195 16.3756 15.1732C17.7163 15.827 18.8901 16.7781 19.8076 17.9542C20.7529 16.7145 21.3893 15.2675 21.6642 13.733C21.9392 12.1985 21.8448 10.6206 21.3889 9.1298C20.933 7.63902 20.1286 6.27823 19.0423 5.16004C17.9561 4.04185 16.6192 3.19839 15.1422 2.69946C13.6653 2.20054 12.0908 2.06048 10.5489 2.29088C9.00711 2.52128 7.54232 3.11552 6.27575 4.02442C5.00918 4.93333 3.97725 6.13077 3.26534 7.51767C2.55343 8.90457 2.18202 10.4411 2.18182 12ZM12 21.8182C9.74613 21.8216 7.56029 21.0462 5.81236 19.6233C6.51592 18.6161 7.45237 17.7937 8.54203 17.2262C9.63169 16.6587 10.8423 16.3628 12.0709 16.3636C13.2842 16.3627 14.4802 16.6512 15.5596 17.2052C16.6389 17.7592 17.5706 18.5628 18.2771 19.5491C16.5156 21.0182 14.2937 21.8214 12 21.8182Z"
              fill="black"
            />
          </svg>
          <span style={{color: "black"}}>Account</span>
        </div>
        <div className="help">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 19.2H13.2V16.8H10.8V19.2ZM12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM12 4.8C9.348 4.8 7.2 6.948 7.2 9.6H9.6C9.6 8.28 10.68 7.2 12 7.2C13.32 7.2 14.4 8.28 14.4 9.6C14.4 12 10.8 11.7 10.8 15.6H13.2C13.2 12.9 16.8 12.6 16.8 9.6C16.8 6.948 14.652 4.8 12 4.8Z"
              fill="black"
            />
          </svg>
          <span>Help</span>
        </div>
        <div className="cart">
          <svg
            width="20"
            height="20"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.83203 6.33398H22.4457C22.8026 6.334 23.1556 6.41208 23.4818 6.56319C23.808 6.7143 24.1003 6.9351 24.3397 7.21134C24.5792 7.48758 24.7606 7.81313 24.8722 8.16702C24.9837 8.52091 25.023 8.89527 24.9875 9.26598L24.2211 17.266C24.1581 17.924 23.8631 18.5341 23.3934 18.9778C22.9237 19.4216 22.3128 19.6673 21.6794 19.6673H9.48133C8.89055 19.6676 8.31796 19.454 7.86103 19.0631C7.40411 18.6722 7.0911 18.1281 6.97531 17.5233L4.83203 6.33398Z"
              stroke="black"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M4.83184 6.33333L3.79724 2.00933C3.72805 1.721 3.56855 1.46508 3.34407 1.28221C3.1196 1.09934 2.84302 1.00001 2.55828 1H1M8.66368 25H11.2182M18.8819 25H21.4365"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
}
