import { Clients } from "@/@types/Clients"
import { columns } from "@/components/Tables/Clients/columns";
import { DataTable } from "@/components/Tables/Clients/data-table";
import { baseApi } from "@/lib/api";
import { useEffect, useState } from "react"


export function Client() {

    const [data, setData] = useState<Clients[]>();

    useEffect(() => {

        baseApi.get("/clientes")
            .then((response) => setData(response.data));

    }, []);


    return (
        <main className="flex flex-col w-[60%] bg-slate-800 h-screen text-white mx-auto p-20">
            <h1 className="text-3xl font-black leading-tight text-indig-500">Client</h1>
            {data && (
                <section>
                    <DataTable
                        columns={columns}
                        data={data}
                    />
                </section>
            )}
        </main>
    )
}