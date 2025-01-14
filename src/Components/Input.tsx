import { GoSearch } from "react-icons/go";

const Input = () => {
    return (
        <div className="h-full w-full flex items-center justify-center p-4 text-sm">
            <div className="w-full max-w-4xl flex items-center justify-center border  rounded-lg ">
                <input
                    className="w-full p-4 t bg-transparent   shadow-sm select-none focus:outline-none"
                    type="text"
                    placeholder="Give me Past 10 Transactions of address 7vwk...."
                />
                <button className="p-3.5 bg-[##474747] rounded-3xl">
                    <GoSearch color="" size={25}/>
                </button>
            </div>
        </div>
    )
}

export default Input