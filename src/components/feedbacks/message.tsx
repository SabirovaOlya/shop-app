import { memo } from "react"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


export const Message = memo(() => {
    return (
        <div className="flex flex-row items-center border-2 border-blue-500 bg-blue-100 p-4 rounded">
            <ErrorOutlineIcon className="mr-6 text-lg text-blue-700" />
            <div>
                <p className="font-bold">Leave your thoughts and feedback about our products. What praise or complaints do you have?</p>
                <span className="fonrt-extralight mt-1 text-sm">(Your feedback is completely anonymous)</span>
            </div>
        </div>
    )
})