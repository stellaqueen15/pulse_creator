"use client";

export default function Topbar() {

    return (
        <div className="flex h-16 rounded-2xl w-full items-center justify-between bg-card p-6">
            <div className="flex w-72 items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                <i className="fi fi-rr-search text-sm text-white/50"></i>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent text-sm text-white outline-none"
                />
            </div>

            <div className="flex items-center gap-3">
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white cursor-pointer transition hover:bg-white/15">
                    <i className="fi fi-br-brightness flex items-center text-xl"></i>
                </button>

                <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/15">
                    <i className="fi fi-ss-bell flex items-center text-xl"></i>

                    <span className="absolute right-3 top-2 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                </button>

                <div className="ml-2 flex items-center gap-3 border-l border-white/10 pl-4">
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/20">
                        <img
                            src="https://i.pravatar.cc/100?img=47"
                            alt="User avatar"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="hidden leading-tight sm:block">
                        <p className="text-sm font-semibold text-white">
                            Brenda Kolaan
                        </p>
                        <p className="text-xs text-white/50">
                            brenda@example.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}