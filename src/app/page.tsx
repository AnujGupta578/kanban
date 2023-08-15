import React from "react";
import Link from "next/link";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Link href={'./dashboard'}>DashBoard</Link>
        <Link href={'./login'}>Login</Link>
        <Link href={'./profile'}>Profile</Link>
        <Link href={'./register'}>Register</Link>
      </>
    )
  }
}
