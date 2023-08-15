import React from "react";
import Link from "next/link";

export default class DashBoard extends React.Component {

  render() {
    return (
      <>
        <p>Hello! Welcome to prfile</p>
        <Link href={'/'}>Home</Link>
      </>
    )
  }

}