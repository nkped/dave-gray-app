 import Link from "next/link"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Wellcome to home of butt!</h1>
      <Link href='/users'>Users</Link>

      
    </main>
  )
}
