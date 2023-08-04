import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { baseApi } from "@/lib/api";

import useAuthStore from "@/store/AuthStore";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";

const loginSchema = z.object({
    username: z.string().email("Não é um email válido"),
    password: z.string().min(2)
});

type loginSc = z.infer<typeof loginSchema>;


export function LoginForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { toast } = useToast();
    const { signIn } = useAuthStore((state) => ({
        signIn: state.setToken,
        isLogged: state.isLogged
    }));
    const form = useForm<loginSc>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            password: "",
            username: ""
        }
    })

    async function onSubmit(values: loginSc) {

        try {
            const res = await baseApi.post("/auth/login", {
                login: values.username,
                password: values.password
            });

            if (res.status === 200) {
                if (res.data.token && typeof res.data.token == "string") {
                    signIn(res.data.token);

                    toast({
                        variant: "success",
                        title: "Sucesso",
                        description: "Login efetuado com sucesso, redirecionando..."
                    })

                    setTimeout(() => {
                        navigate(from, { replace: true });
                    }, 1000);

                    return;
                }
            }
        } catch (err) {
            // TODO: Notify failed login
            console.log('Error');
            toast({
                variant: "destructive",
                title: "Erro",
                description: "Login ou senha incorreta",
            })
        }
    }

    return (
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <FormControl>
                                    <Input id="username" placeholder="davi@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <FormControl>
                                    <Input id="password" type="password" placeholder="●●●●●●●●" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Login</Button>
                </form>
            </Form>
        </section>
    )
}