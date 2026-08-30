"use client";

export default function Topbar() {
    return (
        <div className="flex h-16 w-full items-center justify-between rounded-2xl bg-card px-3 sm:px-6">
            <div className="flex min-w-0 flex-1 max-w-72 items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                <i className="fi fi-rr-search shrink-0 text-sm text-white/50"></i>

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full min-w-0 bg-transparent text-sm text-white outline-none"
                />
            </div>

            <div className="ml-3 flex shrink-0 items-center gap-2 sm:gap-3">
                <button
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-white/10
                    text-white transition hover:bg-white/15 sm:h-10 sm:w-10"
                >
                    <i className="fi fi-br-brightness flex items-center text-lg sm:text-xl"></i>
                </button>

                <button
                    className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl
                    bg-white/10 text-white transition hover:bg-white/15 sm:h-10 sm:w-10"
                >
                    <i className="fi fi-ss-bell flex items-center text-lg sm:text-xl"></i>

                    <span className="absolute right-2 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500 sm:right-3 sm:top-2" />
                </button>

                <div className="ml-1 flex cursor-pointer items-center gap-2 border-l border-white/10 pl-2
                    sm:ml-2 sm:gap-3 sm:pl-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full
                        bg-white/20 sm:h-9 sm:w-9">
                        <img
                            src="https://i.pravatar.cc/100?img=47"
                            alt="User avatar"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="hidden leading-tight md:block">
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