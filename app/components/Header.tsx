export default function Header() {
    return (
        <header className="fixed left-0 top-0 flex w-full justify-center pl-5 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
            <div className="container">
                <h1 className="text-2xl">MTGStats</h1>
            </div>
        </header>
    );
}