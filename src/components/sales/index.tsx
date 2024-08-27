import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-x1 text-gray-800">
                        Ultimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage className="rounded-full" src="https://github.com/omartins-zs.png" />
                        <AvatarFallback>GM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">omartins-zs</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">gabrielmatheus209@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage className="rounded-full" src="https://github.com/omartins-zs.png" />
                        <AvatarFallback>GM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">omartins-zs</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">gabrielmatheus209@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage className="rounded-full" src="https://github.com/omartins-zs.png" />
                        <AvatarFallback>GM</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">omartins-zs</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">gabrielmatheus209@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}