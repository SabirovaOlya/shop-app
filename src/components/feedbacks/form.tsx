import { useState } from 'react'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CampaignIcon from '@mui/icons-material/Campaign';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';



function FeedbackForm() {
    const [text, setText] = useState<string>()
    const [status, setStatus] = useState<boolean>(true)

    const handleSubmit = async () => {
        if (text?.trim()?.length === 0 || typeof (text) !== 'string') {
            return alert('Matn kiriting')
        }

        const data = {
            message: text,
            is_complaint: !status
        }

        // try{
        //     const res = await https.post('/telegram-send-messages', data)
        //     alert('Xabar yuborildi', 'success')
        // }
        // catch(err){
        //     alert('Xato', 'error')
        // }
    }



    return (
        <div className='feedback_form'>
            <div className='feedback_form_boxs'>
                <button type='button' className={`positive ${status ? '' : 'no_active'}`} onClick={() => { setStatus(true) }}><CampaignIcon className='btn_icon' /> Suggestions</button>
                <button type='button' className={`negative ${status ? 'no_active' : ''}`} onClick={() => { setStatus(false) }}><ReportProblemIcon className='btn_icon' /> Complaints</button>
            </div>
            <TextField
                id="outlined-multiline-static"
                fullWidth
                label="Matn"
                multiline
                rows={4}
                value={text}
                color={status ? 'success' : 'error'}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />

            <button className='submit_button' onClick={() => { handleSubmit() }}>Yuborish <SendIcon className='btn_icon' /></button>

        </div>
    )
}

export default FeedbackForm