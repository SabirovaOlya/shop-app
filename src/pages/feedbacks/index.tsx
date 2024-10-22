import FeedbackForm from "../../components/feedbacks/form"
import { Message } from "../../components/feedbacks/message"

const Feedbacks = () => {
    return (
        <div className="m-2 bg-white h-full p-4 shadow-2xl rounded-lg">
            <Message />
            <br className="border-b-1 border-black" />
            <FeedbackForm />
        </div>
    )
}

export default Feedbacks