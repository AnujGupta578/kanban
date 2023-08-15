import React from "react";
import Link from "next/link";

export default class Register extends React.Component {
  render() {
    return (
      <>
        <p>Hello! Welcome to register</p>
        <Link href={'/'}>Home</Link>
      </>
    )
  }

}