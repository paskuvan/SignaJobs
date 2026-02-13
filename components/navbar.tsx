import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">
                <Briefcase />
                SignaJobs 
                </Link>
            </div>
        </nav>
    );
}