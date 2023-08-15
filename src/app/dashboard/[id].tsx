import Link from "next/link"
export default function DashBoard() {
  return (
    <>
      <p>Hello! Welcome to Dashboard child route</p>
      <Link href={'/'}>Home</Link>
    </>
  )
}