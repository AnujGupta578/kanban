
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Link href={'./dashboard'}>DashBoard</Link>
      <Link href={'./login'}>Login</Link>
      <Link href={'./profile'}>Profile</Link>
      <Link href={'./register'}>Register</Link>
      <Footer />
    </>
  )
}
