import Link from "next/link";
import { Arrow } from "./components/Icons";

export default function NotFound() {
  return (
    <main className="page-head not-found">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p className="lead">It may have moved, or the link may be incorrect.</p>
        <Link href="/" className="btn">Back to home <Arrow /></Link>
      </div>
    </main>
  );
}
