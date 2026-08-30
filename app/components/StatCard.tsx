type StatCardProps = {
    label: string;
    icon: string;
    value: number;
    change: number;
    period?: string;
};

export default function StatCard({
 label,
 icon,
 period,
 value,
 change,
 }: StatCardProps) {

    function formatStat(value: number) {
        if (value >= 1_000_000) {
            return `${(value / 1_000_000).toFixed(1)}M`;
        }

        if (value >= 1_000) {
            return `${(value / 1_000).toFixed(1)}K`;
        }

        return value.toString();
    }

    return (
        <div className="bg-card min-w-55 rounded-3xl p-3 shadow-sm">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold text-card-text">
                        {label}
                    </p>

                    {period && (
                        <p className="text-xs text-card-text/70">
                            {period}
                        </p>
                    )}

                    <div className="flex items-center gap-2">
                        <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                            {formatStat(value)}
                        </p>

                        <p className="mt-2 rounded-2xl bg-green-600/30 px-1 text-[0.750rem] font-semibold text-green-600">
                            +{change}%
                        </p>
                    </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-icon text-xl text-white">
                    <i className={`${icon} flex items-center justify-center`}></i>
                </div>
            </div>
        </div>
    );
}