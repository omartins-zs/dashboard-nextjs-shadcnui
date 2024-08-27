
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../button"
import { Link } from "lucide-react"
export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <div className="flex flex-col">
                <header>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button><span>Abrir</span></Button>
                        </SheetTrigger>

                        <SheetContent>
                            <nav>
                                <Link href="#">
                                    <span>Logo</span>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    )
}