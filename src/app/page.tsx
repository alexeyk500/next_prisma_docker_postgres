import classes from './page.module.css'
import {prisma} from "../../lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className={classes.container}>
      <h1 >
        Hello A500
      </h1>
      {
        users.map(user=><div key={user.id}>{`${user.id} - ${user.name} : ${user.email}`}</div>)
      }
    </main>

  )
}
