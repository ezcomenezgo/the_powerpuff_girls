/*
 * @Author:Claire Li
 * @Date:2024-08-07 22:50:49
 * @LastEditors:Claire Li
 * @LastEditTime:2024-08-07 23:13:24
 * @Description:
 */
import Link from 'next/link';

export default function Nav() {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link
        href="/"
        className="btn btn-ghost text-xl"
      >
        Home
      </Link>
      <span className='p-4'>
        This is the assignment of RTL
      </span>
    </div>
  )
}
