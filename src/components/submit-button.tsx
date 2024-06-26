import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
                    bg-gray-800 text-white rounded-full outline-none transition-all
                    hover:scale-105 hover:bg-gray-900 mt-3 disabled:bg-opacity-75
                    dark:bg-zinc-300 dark:hover:bg-zinc-200 dark:text-gray-900"
            disabled={pending}
        >{
                pending
                    ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-zinc-900"></div>
                    ) : (
                        <>
                            Submit
                            < FaPaperPlane className="text-xs opacity-75 transition-all
                            group-hover:translate-x-1 group-hover:-translate-y-1"/>
                        </>
                    )
            }
        </button>
    );
}
