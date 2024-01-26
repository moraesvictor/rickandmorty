import { capitalizeFirstLetter, renderStatus } from "@/app/lib/utils";

export const StatusTag = ({ status }: { status: string }) => {
    return (
        <div className="bg-white py-1 px-3 rounded-3xl flex">
            {renderStatus(status)}
            <span className="font-bold text-gray-800 ml-1">{capitalizeFirstLetter(status)}</span>
        </div>
    );
}