import { Link, Head } from "@inertiajs/react";

export default function Home(props) {
    return (
        <>
            <Head title="Sorveteria" />
            <div className="page relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    <>
                        <Link
                            href={route("login")}
                            className="font-semibold text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 font-semibold text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </>
                </div>


            </div>
        </>
    );
}
