import { useState } from 'react'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography'
import CampaignIcon from '@mui/icons-material/Campaign';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import './style.scss'



function FeedbackForm() {
    const [text, setText] = useState<string>()
    const [status, setStatus] = useState<boolean>(true)
    const [rate, setRate] = useState<number | null>(2);

    const handleSubmit = async () => {
        if (text?.trim()?.length === 0 || typeof (text) !== 'string') {
            return alert('Matn kiriting')
        }

        const data = {
            message: text,
            rate,
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
            <div className='my-4'>
                <p className='text-bold text-sm'>Rating:</p>
                <Rating
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {
                        setRate(newValue);
                    }}
                />
            </div>
            <TextField
                id="outlined-multiline-static"
                fullWidth
                label="Text..."
                multiline
                rows={4}
                value={text}
                color={status ? 'success' : 'error'}
                onChange={(e) => {
                    setText(e.target.value)
                }}
            />

            <button className='submit_button' onClick={() => { handleSubmit() }}>Send <SendIcon className='btn_icon' /></button>

        </div>
    )
}

export default FeedbackForm