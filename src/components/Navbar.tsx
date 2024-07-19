import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">หลักสูตรรัฐประศาสนศาสตร์</a>
            </li>
            <li>
              <a href="/">หน้าหลัก</a>
            </li>
            <li>
              <a href="/about">เกี่ยวกับ</a>
            </li>
            <li>
              <a href="/ai">AI ตรวจวินิจฉัยโรค</a>
            </li>
            <li>
              <a href="/evaluation">การประเมินนโยบายสาธารณะ</a>
            </li>
            <li>
              <a>ChatGPT</a>
            </li>
           
            
            <li>
              <details>
                <summary>ทีมงาน</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>ติดต่อ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">LogIn</a>
          <a className="btn">SignUp</a>
        </div>
      </div>
    </div>
  );
}
