import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { sql } from '@vercel/postgres';

export default async function Page({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> {
  // const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {/* {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))} */}
    </div>
  );
}
